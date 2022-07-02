import { Injectable } from '@angular/core';


//Modulo fb
import { AngularFirestore } from '@angular/fire/firestore';



//Componente post.model.ts
import { Post } from './post.model'

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private afs:AngularFirestore) { }

  //metodos CRUD

  getPost(){
    return this.afs.collection('posts')
           .snapshotChanges() 
  }

  getPostById(id:any){
    return this.afs.collection('posts')
            .doc(id)
            .valueChanges() 
            
  }

  createPost(post:Post){
    return new Promise<any>((resolve, reject)=>{
      this.afs
      .collection('posts')
      .add(post).then((response)=>{
        console.log(response)
      },
      (err)=>{
        reject(err)
      })
    })
  }

  updatePost(post:Post, id:any){
    return this.afs.collection('posts')
          .doc(id)
          .update({
            titulo:post.titulo,
            contenido:post.contenido,
            autor:post.autor
          });
          
  }

  deletePost(post){
    return this.afs.collection('posts')
          .doc(post.id)
          .delete();

  }
}
