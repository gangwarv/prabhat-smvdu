import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  posts: Observable<Post[]>;
  _posts: Observable<any[]>;

  constructor(public aft: AngularFirestore) { }

  ngOnInit() {
    const collection: AngularFirestoreCollection<Post> = this.aft.collection<Post>('posts', p => p.orderBy('title', ));
    this.posts = collection.valueChanges();

    const _collection: AngularFirestoreCollection<Post> = this.aft.collection('posts');
    this._posts = _collection.snapshotChanges()
      .pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data() as Post;
          const id = a.payload.doc.id;
          return { id, ...data };
        }))
      );
  }
  onUpdate() {
    this.aft.collection('posts').doc('1BdiwGq7r42k7GafMzLx').set({
      note: 'To down vote I will do just one userdoc query and the needed postsdoc call.'
    },
      {
        merge: true
      }
    )
  }
}
interface Post {
  id: string;
  title: string;
  note: string;
  uid: string;
}
