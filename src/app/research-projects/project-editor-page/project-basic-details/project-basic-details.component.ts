import {Component, Input, OnInit} from '@angular/core';
import {ResearchProject} from '../../../models/research-project';
import {FormControl, NgForm} from '@angular/forms';
import {FileInput} from 'ngx-material-file-input';
import {MatSnackBar} from '@angular/material';
import {ProjectsService} from '../../../services/projects.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-project-basic-details',
  templateUrl: './project-basic-details.component.html',
  styleUrls: ['./project-basic-details.component.css']
})
export class ProjectBasicDetailsComponent implements OnInit {


  @Input() project?: ResearchProject;
  image = new FormControl('image', []);
  imgURL: string | ArrayBuffer;
  dueDate: string;
  clearImage = false;

  constructor(private snackBar: MatSnackBar, private projectService: ProjectsService) { }

  ngOnInit() {
    if (!this.project) {
      this.project = new ResearchProject();
    }
    this.imgURL = this.project && this.project.image;
  }

  saveProject(f: NgForm) {
    if (f.valid) {
      if (this.clearImage) {
        this.imgURL = '';
      }
      this.project.title = f.value.title;
      this.project.dueDate = new Date(f.value.dueDate);
      this.project.image = this.imgURL;
      let obs: Observable<ResearchProject> = null;
      if (this.project.id) {
        obs = this.projectService.updateProject(this.project);
      } else {
        obs = this.projectService.createProject(this.project);
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

    const mimeType = file.files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.image.setErrors({invalidFormat: true});
      return;
    } else {
      this.image.setErrors(null);
    }

    const reader = new FileReader();
    reader.readAsDataURL(file.files[0]);
    reader.onload = () => {
      this.imgURL = reader.result;
      this.project.image = reader.result;
    };
  }

}
