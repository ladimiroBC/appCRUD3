import { Component, OnInit } from '@angular/core';

//Importamos el modelo
import { Post } from 'src/app/post.model';

//Impotamos el servicio
import { PostService } from 'src/app/post.service';

@Component({
  selector: 'app-mostrar',
  templateUrl: './mostrar.component.html',
  styleUrls: ['./mostrar.component.css']
})
export class MostrarComponent implements OnInit {
  Posts:Post[];

  constructor(private postSvc:PostService) { }

  ngOnInit(): void {
    console.log(this.postSvc.getPost())
    this.postSvc.getPost().subscribe((res)=>{
      this.Posts=res.map((e)=>{
        return{
          id:e.payload.doc.id,
          ...(e.payload.doc.data() as Post)
        }
      })
      console.log(this.Posts)
    });
  }

  delete=(post)=>this.postSvc.deletePost(post)

}
