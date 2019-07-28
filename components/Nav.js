import Link from 'next/link';

const headerNav = (props) => (
  <div className="nav">
    <ul>
      <li>
        <Link href="/">
        <a>Home</a>
      </Link>
    </li>
    <li>
      <Link href="/contacts">
      <a>Contacts</a>
    </Link>
  </li>
</ul>
</div>
);

export default headerNav;
