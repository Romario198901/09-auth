import Link from 'next/link';
import css from './ProfilePage.module.css';
import { Metadata } from 'next';
interface ProfileProps {
  params: Promise<{ id: string }>;
}
export async function generateMetadata({params}: ProfileProps): Promise<Metadata> {
 
  return {
    // title: `Info about: ${user.title}`,
    // description: `${note.content}`,
    // openGraph: {
    // type: 'website',
    // url: `http://localhost:3000/notes/${id}`,
    // title:  `Info about: ${note.title}`,
    // description: `${note.content}`,
    // images:[
    //   {
    //     url: 'https://ac.goit.global/fullstack/react/notehub-og-meta.jpg',
    //     width: 600,
    //     height:300,
    //     alt: 'Notehub main logo',
    //   }
    // ],
  // }
  }
}
export default function Profile() {
  return (
    <main className={css.mainContent}>
      <div className={css.profileCard}>
        <div className={css.header}>
          <h1 className={css.formTitle}>Profile Page</h1>
          <Link href="" className={css.editProfileButton}>
            Edit Profile
          </Link>
        </div>
        <div className={css.avatarWrapper}>
          <img
            src="Avatar"
            alt="User Avatar"
            width={120}
            height={120}
            className={css.avatar}
          />
        </div>
        <div className={css.profileInfo}>
          <p>Username: your_username</p>
          <p>Email: your_email@example.com</p>
        </div>
      </div>
    </main>
  );
}
