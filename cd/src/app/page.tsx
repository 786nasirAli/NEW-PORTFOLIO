import Image from "next/image";
import Link from "next/link";
import styles from './page.module.css';

 const Home = () => {
  return (
    <div>
       <section className={styles.home}>
      <div className={styles.intro}>
        <h1 className='text-3xl'>Hello, I'm Sikandar Ali</h1>
        <p className='text-1xl'>
        Hello! I'm a passionate web developer and IT student currently pursuing a course in Cloud Applied Generative AI Engineering. With a solid foundation in HTML, CSS, JavaScript/TypeScript, and frameworks like Next.js and React, I enjoy creating engaging and visually appealing user interfaces. I have successfully completed multiple projects focusing on modern design principles, responsiveness, and user experience.
        </p>
        <p>I am also diving into data science and artificial intelligence to expand my skill set further. My goal is to develop innovative solutions that leverage the power of AI and cloud technology. As I grow in this field, I'm excited to work on projects that challenge me and help me learn new technologies.</p>
        <Link href="/contact" className={styles.button}>Contact me</Link>
      </div>
      <div className={styles.imagediv}>
      <div className={styles.image} >
        <img src="/nasir portfolio.jpg" alt="Profile Image " />
        





        
      </div>
      </div>
    </section>
    
    
    </div>
  );
}
export default Home;