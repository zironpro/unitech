export function ContactMap() {
  return (
    <section className="w-full h-[400px] md:h-[500px] relative border-t border-slate-200">
      <iframe
        src="https://maps.google.com/maps?q=Jewellery%20%26%20Gemplex%20Building,%20Dubai&t=&z=15&ie=UTF8&iwloc=&output=embed"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Unitech Location Map"
        className="grayscale-[40%] contrast-125 hover:grayscale-0 transition-all duration-500"
      ></iframe>
    </section>
  );
}
