import { Component, OnInit } from '@angular/core';

//Servicio
import { PostService } from 'src/app/post.service';

//Modulos angular
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {
  public postForm:FormGroup
  
  constructor(
    public postSvc:PostService,
    public router:Router,
    public fb:FormBuilder
  ) { 
    this.postForm=this.fb.group({
      titulo:[''],
      contenido:[''],
      autor:[''],
    })
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.postSvc.createPost(this.postForm.value)
    this.router.navigate([''])
  }
}
