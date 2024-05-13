import Link from "next/link";

export default function Header() {
  return (
    <header className="header" style={{
      position: 'absolute',
      top: 0,
      width: '100%',
      height: 125,
      backgroundColor: 'rgb(248,20,108)',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <h1 style={{
        margin: 15
      }}>
        Checkpoint : frontend
      </h1>
      <Link href="/" style={{
        color: 'white',
        textDecoration: 'none',
        fontSize: 25,
        marginBottom: 15
      }}>
        Countries
      </Link>
    </header>
  );
}
