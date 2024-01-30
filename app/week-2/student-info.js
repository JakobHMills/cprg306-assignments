import Link from 'next/link';
import 'tailwindcss/tailwind.css';

const StudentInfo = () => {
  const githubRepositoryLink = 'https://github.com/JakobHMills/cprg306-assignments';

  return (
    <div>
      <h1 className='text-yellow-300'>Jakob Mills</h1>
      <Link href={githubRepositoryLink}>
        Link to GitHub Repository
      </Link>
    </div>
  );
};

export default StudentInfo;