import React from 'react';
import banner from './banner.jpg';

const bannerStyle= {
    background: `url(${banner}) rgba(13, 15, 12,0.7)`,
    backgroundSize: 'cover',
    backgroundBlendMode: 'darken, luminosity',
    backgroundRepeat: 'no-repeat!important',
    width: '100vw',
    height: '70vh',
}

const Banner = () => {
    return (
        <div className="d-flex justify-content-center align-items-center" style={bannerStyle}>
           <div className="container border text-white">
              <h3>ebitis praesentium iste explicabo modi a. Quos sapiente, debitis vitae atque dolores veniam quasi mollitia error aperiam nihil voluptatibus recusandae nostrum aspernatur exercitationem ducimus quibusdam laudantium odit consequuntur. Incidunt fugiat saepe quaerat ab. Consequatur nostrum, delectus deleniti error illum est? Officia enim nam consequuntur. Velit obcaecati ex, sunt beatae illo error eum? Dolor dolore reprehenderit, cupiditate dolorem nesciunt iure esse cum minima provident, ab non quod ullam dicta? Nobis nihil deserunt doloribus perferendis delectus nesciunt et dolores autem? Adipisci, quod architecto? Harum dignissimos facilis assumenda. Voluptate quae hic architecto, repellendus, voluptas autem harum quam earum facilis adipisci et ut vero molestiae sit, fugiat minus qui at reprehenderit! Veritatis voluptates iste sint magnam veniam vero eos quod eligendi! Nobis quasi nam consequatur fuga labore totam dolorum fugit, aliquid, laboriosam accusamus suscipit nesciunt accusantium animi facilis perspiciatis iste, recusandae explicabo quo? Fuga quam voluptatibus dolor doloremque in tenetur vel architecto culpa vitae sapiente, quod quia incidunt totam minus est similique sint rem obcaecati reiciendis.lorem20 </h3>
           </div>
        </div>
    );
};

export default Banner;