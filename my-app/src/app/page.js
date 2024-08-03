// 
import Image from 'next/image';
import styles from './page.module.css';
import pampurredpet from '../images/pampurredpet.png';
import catpic from '../images/catpic.jpg';
import petinsurance2024 from '../images/petinsurance2024.png';
import herobannerpamperedpet from '../images/herobannerpamperedpet.png';
import dog from '../images/dog.png';
import hero from '../images/hero.jpg';

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Image src={pampurredpet} alt="Pampurred Pet logo" width={250} height={100} />
        <nav className={styles.navbar}>
          <a href="#about" className={styles.navLink}>About</a>
          <a href="#blog" className={styles.navLink}>Blog</a>
          <a href="#contact" className={styles.navLink}>Contact</a>
        </nav>
        <Image src={hero} alt="Pampurred Pet hero banner" width={600} height={300} />
        <p className={styles.description}>Your ultimate source for pet care tips</p>
      </header>

      <main className={styles.main}>
        <div className={styles.content}>
          <section className={styles.featuredSection}>
            <h2>Featured Posts</h2>
            <div className={styles.featuredCard}>
              <Image src={catpic} alt="Featured Blog Image" width={300} height={200} className={styles.image} />
              <div className={styles.featuredContent}>
                <h3>The Ultimate Guide to Cat Care</h3>
                <p>Tips for a Happy and Healthy Feline Friend</p>
                <a href="https://www.onehealth.org/blog/happy-and-healthy-cat-care-ways-to-keep-your-feline-friend-purring" className={styles.readMore}>Read More</a>
              </div>
            </div>
          </section>

          <section className={styles.blogSection}>
            <h2>Latest Posts</h2>
            <div className={styles.card}>
              <Image src={petinsurance2024} alt="Pet Insurance 2024" width={300} height={200} className={styles.image} />
              <h3>Top 7 Pet Insurance Companies of 2024</h3>
              <p>These plans will help you save money and provide top-notch care for your furry friends!</p>
              <a href="https://theswiftest.com/pet-insurance/?transaction_id=&oid=1&affid=1669" className={styles.readMore}>Read More</a>
            </div>
          </section>
        </div>

        <aside className={styles.sidebar}>
          <section className={styles.aboutSection}>
            <h2>About Us</h2>
            <p>Welcome to The Pampurred Pet, your go-to source for all things pet care. We provide expert tips, guides, and reviews to help you take the best care of your furry friends.</p>
          </section>

          <section className={styles.insuranceSection}>
            <h2>The Importance of Pet Insurance</h2>
            <p>Pet insurance can save you thousands of dollars in unexpected veterinary bills. It's crucial for every pet owner to consider investing in a good insurance plan to ensure their pet's health and well-being.</p>
            <a href="https://theswiftest.com/pet-insurance/?transaction_id=&oid=1&affid=1669" className={styles.link}>See the top 7 pet insurance companies of 2024</a>
          </section>
        </aside>
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2024 The Pampurred Pet. All rights reserved.</p>
        <p>
          Follow us on 
          <a href="https://www.pinterest.com/pampurred_pet/"> Pinterest</a>.
        </p>
      </footer>
    </div>
  );
}
