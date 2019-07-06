import {Component, Input, OnInit} from '@angular/core';
import {ResearchProject} from '../../../models/research-project';
import {FormControl, NgForm} from '@angular/forms';
import {FileInput} from 'ngx-material-file-input';
import {MatSnackBar} from '@angular/material';
import {ProjectsService} from '../../../services/projects.service';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import { ImageEntity } from 'src/app/private/models/image-entity';

@Component({
  selector: 'app-project-basic-details',
  templateUrl: './project-basic-details.component.html',
  styleUrls: ['./project-basic-details.component.css']
})
export class ProjectBasicDetailsComponent implements OnInit {


  private _project?: ResearchProject;
  image = new FormControl('image', []);
  imgURL: string | ArrayBuffer;
  dueDate: string;
  clearImage = false;

  constructor(private snackBar: MatSnackBar, private projectService: ProjectsService, private router: Router) { }

  @Input()
  set project(project: ResearchProject) {
    this._project = project;
    if (this.project.image && this.project.image.data) {
      this.imgURL = `data:${this.project.image.mimeType};base64,${this.project.image.data}`;
    }
  }

  get project() {
    return this._project;
  }

  private _arrayBufferToBase64( buffer: ArrayBuffer ) {
    var binary = '';
    var bytes = new Uint8Array( buffer );
    var len = bytes.byteLength;
    for (var i = 0; i < len; i++) {
        binary += String.fromCharCode( bytes[ i ] );
    }
    return btoa( binary );
  }

  ngOnInit() {
    if (!this.project) {
      this.project = new ResearchProject();
    }
    
  }

  saveProject(f: NgForm) {
    if (f.valid) {
      if (this.clearImage) {
        this.imgURL = '';
        this.project.image = null;
      }
      this.project.title = f.value.title;
      this.project.dueDate = new Date(f.value.dueDate);
      let obs: Observable<ResearchProject> = null;
      if (this.project.id) {
        obs = this.projectService.updateProject(this.project);
      } else {
        obs = this.projectService.createProject(this.project);
        obs.subscribe(project => {
          this.router.navigate(['/projects', project.id]);
        });
      }
      obs.subscribe(project => {
        this.project = project;
        this.snackBar.open('Project saved successfully!', 'dismiss', {duration: 2000});
      });
    }
  }
  preview(file: FileInput) {
    if (file.files.length === 0) {
      return;
    }
    const fileName = file.files[0].name;
    const mimeType = file.files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.image.setErrors({invalidFormat: true});
      return;
    } else {
      this.image.setErrors(null);
    }

    const dataURIreader = new FileReader();
    dataURIreader.readAsDataURL(file.files[0]);
    dataURIreader.onload = () => {
      this.imgURL = dataURIreader.result;
    };
    const arrayBufferReader = new FileReader();
    arrayBufferReader.readAsArrayBuffer(file.files[0]);
    arrayBufferReader.onload = () => {
      this.project.image = new ImageEntity(fileName, mimeType, this._arrayBufferToBase64(arrayBufferReader.result as ArrayBuffer));
    };
  }

}
