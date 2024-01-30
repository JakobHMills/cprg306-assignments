import Link from 'next/link';

const AppPage = () => {
  return (
    <div>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>

      {/* Wrap the content to make it clickable with Link */}
      <Link href="/week-2">Go to Week 2 Page</Link>
    </div>
  );
};

export default AppPage;


