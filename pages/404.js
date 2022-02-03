import Image from "next/image";

export default function Custom404() {
  return (
    <div
      style={{
        marginTop: "48px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Image
        src="https://c.tenor.com/lER2_kKTywYAAAAC/monkey-adult-swim.gif"
        width={600}
        height={400}
        alt="mokey working"
      />

      <p>
        Nuestros programadores están trabajando arduamente para tener pronto
        esta sección
      </p>
    </div>
  );
}
