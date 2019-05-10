import {Component, Input, OnInit} from '@angular/core';
import {ResearchProject} from '../../../models/research-project';
import {FormControl, FormGroup, NgForm} from '@angular/forms';
import {FileInput} from 'ngx-material-file-input';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-project-basic-details',
  templateUrl: './project-basic-details.component.html',
  styleUrls: ['./project-basic-details.component.css']
})
export class ProjectBasicDetailsComponent implements OnInit {


  @Input() project: ResearchProject;
  image = new FormControl('image', []);
  imgURL: string | ArrayBuffer;
  dueDate: string;
  clearImage = false;

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.dueDate = this.project && this.project.dueDate.toISOString().split('T')[0];
    this.imgURL = this.project && this.project.image;
  }

  saveProject(f: NgForm) {
    if (f.valid) {
      if (this.clearImage) {
        this.imgURL = '';
      }
      this.project.title = f.value.title;
      this.project.image = this.imgURL;
      this.project.dueDate = new Date(f.value.dueDate);
      this.snackBar.open('Project saved successfully!', 'dismiss', {duration: 2000});
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
