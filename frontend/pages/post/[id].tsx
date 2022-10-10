import Link from "next/link";
import React from "react";
import Edit from "../../public/images/edit.png";
import Delete from "../../public/images/delete.png";
import Menu from "../../components/Menu";

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img
          src={`https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`}
          alt=""
        />
        <div className="user">
          <img
            src={
              "https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            }
            alt=""
          />

          <div className="info">
            <span>{"Admin"}</span>
            <p style={{ margin: 0 }}>Posted {"3 min ago"}</p>
          </div>
          {/* {currentUser.username === post.username && ( */}
          <div className="edit">
            <Link href={`/write?edit=2`}>
              <img src={Edit.src} alt="" />
            </Link>
            <img src={Delete.src} alt="" />
          </div>
          {/* )} */}
        </div>
        <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </h1>
        {/* <p
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(post.desc),
          }}
        ></p>{" "} */}
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus
          dolorem ipsa quidem, illo sunt consequatur possimus impedit,
          recusandae repudiandae quod incidunt amet fuga cumque ducimus! Vero
          veniam accusantium quasi consequuntur amet assumenda cumque ipsum
          porro. Repellat ipsam aliquam animi quae id fuga consectetur ab
          deserunt eligendi blanditiis beatae quibusdam dicta ut dolores
          excepturi nostrum itaque sint est numquam adipisci harum a, voluptatum
          recusandae voluptas. Ratione assumenda deserunt nemo facere sunt iste
          debitis sint distinctio vitae, cupiditate nesciunt excepturi iusto
          sapiente odit repellendus enim a laboriosam dolor, explicabo unde
          veritatis in adipisci similique labore. Ut sed delectus consectetur?
          Architecto inventore sunt temporibus quaerat eum facilis rerum illo
          odit ducimus distinctio doloremque aspernatur fugiat magni, tempore
          unde molestias illum magnam. Corporis deleniti deserunt rem animi
          tempore quibusdam porro obcaecati, repellat error qui sit, quas
          officia eius. Delectus iste suscipit culpa inventore nihil illum
          dolorum optio nemo ad temporibus qui pariatur provident animi cumque
          quaerat, adipisci vitae doloribus, quasi deleniti sapiente laboriosam
          accusantium? Modi, voluptatibus ex aperiam facilis nemo necessitatibus
          natus recusandae eos cumque laborum quos distinctio commodi nihil
          delectus, optio obcaecati quisquam voluptas neque at quia labore minus
          deserunt. Repellat ducimus molestiae officiis hic. Eligendi nobis
          aspernatur laboriosam placeat? Repellat, sed! At, a? Aperiam voluptate
          doloremque ut eveniet quibusdam dolore omnis maiores inventore id
          error repellendus, nostrum nam eaque, similique distinctio nihil
          aliquam in iste doloribus! Nostrum vero voluptatem doloremque,
          dignissimos laborum, quidem corporis repudiandae qui libero maiores
          modi nisi error dolorem ullam natus repellendus reiciendis
          perspiciatis obcaecati ad vitae recusandae pariatur nihil maxime!
          Iusto modi deleniti nostrum corrupti enim nihil similique nam rerum
          doloribus magni voluptatibus beatae eius eaque expedita sit corporis,
          nesciunt ratione vero obcaecati quam rem odio. Debitis voluptatum sint
          maxime natus ex ratione cum corporis, odio temporibus at optio dolore
          eum corrupti sed nemo, ab provident deserunt quod aliquid cupiditate
          doloremque minus. Doloribus exercitationem hic dicta sequi, veniam
          incidunt sint cupiditate reiciendis doloremque dolor ratione officiis
          dignissimos quod qui quia voluptates fugiat quam? Totam dolorem
          doloribus eos, in voluptates quae rem mollitia amet quam maiores!
          Cupiditate unde inventore repudiandae. Aliquid recusandae reiciendis
          porro asperiores eligendi temporibus magnam! Explicabo corrupti quos,
          blanditiis nobis eligendi consequatur nihil amet esse iste ad
          repellat, vero, sit est nostrum sint dolores molestias neque eum. Ab
          pariatur sunt harum nesciunt inventore, eius eaque blanditiis hic
          temporibus earum quas aperiam, sit soluta quisquam quod velit eum quos
          architecto distinctio dolore corrupti quaerat? Est repudiandae
          voluptates, excepturi molestiae veritatis corporis debitis
          necessitatibus dolore modi tempore minima dolorem maxime laudantium
          vero, enim qui hic animi eveniet! Beatae laudantium maxime
          praesentium, a repellat quo! Ex consequuntur sit provident ipsum
          quisquam. Corrupti autem quisquam ab perferendis enim commodi,
          deleniti numquam in unde. Asperiores, dolorem facilis at, illo
          eligendi eos et fuga cupiditate maiores dicta repellendus error. Animi
          veniam reiciendis itaque natus dolor aliquid aspernatur id a labore
          porro velit explicabo assumenda nobis, fugiat deleniti temporibus
          quaerat nostrum sit ab eveniet? Accusantium quidem ducimus molestias
          labore eius quam. Quasi ea beatae quo dicta iste laudantium facere rem
          repellendus minima deleniti?
        </p>
      </div>
      <Menu />
    </div>
  );
};

export default Single;
