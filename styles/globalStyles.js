export default function GlobalStyles() {
  return (
    <style jsx global>{`
      * {
        box-sizing: border-box;
      }

      body {
        font-family: "Short Stack", "Ubuntu", "Dongle", Helvetica, sans-serif;
        color: #333;
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

      input::-webkit-outer-spin-button,
      input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }

      input[type="number"] {
        -moz-appearance: textfield;
      }
    `}</style>
  );
}
