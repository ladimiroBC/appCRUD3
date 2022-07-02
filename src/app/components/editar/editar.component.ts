import { Component, OnInit } from '@angular/core';

//Servicio
import { PostService } from 'src/app/post.service';

//Modulos angular
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  public editForm:FormGroup;
  postRef:any;

  constructor(
    public postSvc:PostService,
    public fb:FormBuilder,
    private router:Router,
    private activeRoute:ActivatedRoute    
  ) { 
      this.editForm=this.fb.group({
        titulo:[''],
        contenido:[''],
        autor:['']
      })
    }

  ngOnInit(): void {
    const id=this.activeRoute.snapshot.paramMap.get('id')
    this.postSvc.getPostById(id).subscribe(res=>{
      this.postRef=res
      this.editForm=this.fb.group({
        titulo:[this.postRef.titulo],
        contenido:[this.postRef.contenido],
        autor:[this.postRef.autor]
      })
    })
    console.log(id)
    
  }

  onSubmit(){
    const id=this.activeRoute.snapshot.paramMap.get('id')
    this.postSvc.updatePost(this.editForm.value,id)
    this.router.navigate([''])
  }

}
