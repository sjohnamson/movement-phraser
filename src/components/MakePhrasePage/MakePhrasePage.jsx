
import React from 'react';
import { CloudinaryVideo } from "@cloudinary/url-gen";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { VideoEdit } from "@cloudinary/url-gen/actions/videoEdit";
import { Concatenate } from "@cloudinary/url-gen/qualifiers/concatenate";
import { Transformation } from "@cloudinary/url-gen/transformation/Transformation";
import MakePhraseClipCard from '../ClipCard/MakePhraseClipCard'
export default function MakePhrasePage() {
    const newPhrase = new CloudinaryVideo("kitten_fighting.mp4")
    .resize(fill().width(300).height(200))
    .videoEdit(VideoEdit.concatenate(
      Concatenate.videoSource("dog").transformation(
          new Transformation().resize(fill().width(300).height(200))
        )
      )
    );

    return (



        <section className="clips">
            <MakePhraseClipCard xs={4} sm={3} md={2}/>
        </section>
    )
}