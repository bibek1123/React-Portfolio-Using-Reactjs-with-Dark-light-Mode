import './about.css'
import Award from '../../img/images.jpg';
const About = () => {
    return (
        <div className="about">
            <div className="about-left">
            <div className="about-card-bg"></div>
                    <div className="about-card">
                        <img src="https://source.unsplash.com/1600x900/?coding" alt="" className="about-img" />
                    </div>
                </div>
            <div className="about-right">
                <h1 className="about-title">About Me</h1>
                <p className="about-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus eligendi cumque magni libero voluptas quos nesciunt, asperiores voluptatem nam distinctio.</p>
                <p className="about-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, deleniti expedita non incidunt odio optio quisquam dolores libero dolor blanditiis pariatur quod, vitae, odit at cupiditate aliquid. Dolor porro sit eos architecto eligendi quisquam facilis incidunt doloremque inventore odit quod</p>
                <div className="about-award">
                    <img src={Award} alt="" className="about-award-img" />
                    <div className="about-award-text">
                        <h4 className="about-award-title">Excellent Design Award 2019</h4>
                        <p className="about-award-para">Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
