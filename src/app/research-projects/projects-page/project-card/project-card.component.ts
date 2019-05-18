import {Component, ElementRef, HostListener, Input, OnInit, ViewChild} from '@angular/core';
import {ResearchProject} from '../../../models/research-project';
import {ProjectsService} from '../../../services/projects.service';
import * as _ from 'lodash';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent implements OnInit {
  @Input() project: ResearchProject;
  @ViewChild('imgContainer') img: ElementRef;

  placeHolderUrl: string;
  dataSources: Observable<number>;
  noSources: Observable<boolean>;

  constructor(private projectsService: ProjectsService) { }


  setPlaceHolderUrl() {
    const placeHolderWidth = Math.floor(this.img.nativeElement.parentElement.clientWidth * 0.25);
    const placeHolderHeight = Math.floor(placeHolderWidth * 0.25);
    this.placeHolderUrl = `http://placehold.it/${placeHolderWidth}x${placeHolderHeight}`;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.setPlaceHolderUrl();
  };

  ngOnInit() {
    this.setPlaceHolderUrl();
    this.dataSources = this.projectsService.getDataSources(this.project.id).pipe(
      map(x => x.length)
    );
    this.noSources = this.dataSources.pipe(map(numSources => numSources === 0));
  }

  deleteProject() {
    this.projectsService.deleteProject(this.project);
  }

}
