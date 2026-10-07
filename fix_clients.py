import re

file_path = r'src\pages\Clients.tsx'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Remove all imports from assets/clients
content = re.sub(r'import\s+\w+\s+from\s+[\'"]@/assets/clients/.*?[\'"];\n', '', content)

# The new clients array
new_clients = '''const clients = [
  { name: "CRUST", logo: "/THE DIGITAL COYOTES/crust.png", category: "Electronics" },
  { name: "Rajkamal", logo: "/THE DIGITAL COYOTES/rajkamal.png", category: "Lifestyle" },
  { name: "iTUDE", logo: "/THE DIGITAL COYOTES/itude.png", category: "Technology" },
  { name: "ORRO", logo: "/THE DIGITAL COYOTES/orro.png", category: "Luxury" },
  { name: "Culinary Creations", logo: "/THE DIGITAL COYOTES/culinary creations.png", category: "Food & Beverage" },
  { name: "RISA NX", logo: "/THE DIGITAL COYOTES/risenx.png", category: "Fashion" },
  { name: "Joy Movers", logo: "/THE DIGITAL COYOTES/joymovers.png", category: "Logistics" },
  { name: "Vinshar Integrated Services", logo: "/THE DIGITAL COYOTES/vinshar.png", category: "Services" },
  { name: "Trillium Real Estate", logo: "/THE DIGITAL COYOTES/trillium.png", category: "Real Estate" },
  { name: "SH Productions", logo: "/THE DIGITAL COYOTES/saiproductions.png", category: "Media" },
  { name: "RISA by Rinkesh & Sanchi", logo: "/THE DIGITAL COYOTES/risabyrinkeshandsanchi.png", category: "Fashion" },
  { name: "SAR Venture Pvt Ltd", logo: "/THE DIGITAL COYOTES/sarventurepvtltd.png", category: "Finance" },
  { name: "Athena Global Logistics", logo: "/THE DIGITAL COYOTES/athenagloballogistics.jpeg", category: "Logistics" },
  { name: "Bakelette", logo: "/THE DIGITAL COYOTES/bakelette-logo-0LT-_flN.png", category: "Food & Beverage" },
  { name: "Clickcab", logo: "/THE DIGITAL COYOTES/clickcab.jpeg", category: "Transport" },
  { name: "Dermatiqua", logo: "/THE DIGITAL COYOTES/dermatiqua-logo-v2-MPqXf_62.webp", category: "Health & Beauty" },
  { name: "Espoir", logo: "/THE DIGITAL COYOTES/espoir.jpeg", category: "Lifestyle" },
  { name: "Jadha Hospital", logo: "/THE DIGITAL COYOTES/jadhahospital.webp", category: "Healthcare" },
  { name: "La Aesthstique", logo: "/THE DIGITAL COYOTES/laaesthstique.webp", category: "Health & Beauty" },
  { name: "Nayesha Childcare", logo: "/THE DIGITAL COYOTES/nayeshachildcare.png", category: "Healthcare" },
  { name: "Scientech", logo: "/THE DIGITAL COYOTES/scientech.jpeg", category: "Technology" },
  { name: "Shree Hospital", logo: "/THE DIGITAL COYOTES/shreehospital.png", category: "Healthcare" },
  { name: "Shreevallabh Ayurveda", logo: "/THE DIGITAL COYOTES/shreevallabh ayurveda.webp", category: "Healthcare" },
];'''

# Replace the clients array
content = re.sub(r'const clients = \[.*?\];', new_clients, content, flags=re.DOTALL)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)
print("Updated Clients.tsx")
