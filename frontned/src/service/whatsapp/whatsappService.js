const DEFAULT_WHATSAPP_NUMBER = "9704726252";

const normalizeText = (value) => String(value ?? "").trim();

export const buildWhatsAppUrl = ({
  name,
  contact,
  description,
  phoneNumber = DEFAULT_WHATSAPP_NUMBER,
}) => {
  const safeName = normalizeText(name);
  const safeContact = normalizeText(contact);
  const safeDescription = normalizeText(description);

  const lines = [
    "Hello Ferret Technologies,",
    "",
    "I would like to discuss a project.",
    `Name: ${safeName || "-"}`,
    `Email/Phone: ${safeContact || "-"}`,
    `Project Details: ${safeDescription || "-"}`,
  ];

  const message = encodeURIComponent(lines.join("\n"));
  return `https://wa.me/${phoneNumber}?text=${message}`;
};

export const openWhatsAppChat = (payload) => {
  if (typeof window === "undefined") return;
  const whatsappUrl = buildWhatsAppUrl(payload);
  window.location.assign(whatsappUrl);
};

