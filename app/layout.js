import Link from "next/link";

//Links de la navbar
const NavbarLay =[
  {
  label: 'Home',
  route: '/'
  }, 

  {
    label: 'Traductor',
    route: '/Traductor'
    },

    {
      label: 'Cursos',
      route: '/Cursos'
    },

  {
    label: 'Curso Ingles',
    route: '/CursoIngles'
  },

  {
    label: 'Curso Frances',
    route: '/CursoFrances'
  },

  {
    label: 'Login',
    route: '/login/'
  },

  {
    label: 'Logout',
    route: '/logout/'
  }
]

export default function RootLayout({children}) {
  return(
    <html>
      <head>
        <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.main"></link>
        <title>Dogo Traductor</title>
      </head>
      
      <nav>
          <ul>
            {NavbarLay.map(({ label, route }) => (
              <li>
                <Link href={ route }> {label}</Link>
              </li>
            ))}
            
          </ul>
      </nav>
      <body>{children}</body>
    </html>
  )
}





