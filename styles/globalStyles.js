export default function GlobalStyles() {
  return (
    <style jsx global>{`
      * {
        box-sizing: border-box;
      }

      body {
        font-family: "Ubuntu", "Dongle", Helvetica, sans-serif;
        letter-spacing: 0.125em;
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
