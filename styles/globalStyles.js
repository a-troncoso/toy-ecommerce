export default function GlobalStyles() {
  return (
    <style jsx global>{`
      * {
        box-sizing: border-box;
      }

      ul {
        margin: 0;
        padding: 0;
      }

      ul li {
        list-style: none;
      }

      a {
        color: #000;
        text-decoration: none;
      }
    `}</style>
  );
}
