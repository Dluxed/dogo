import Link from "next/link";

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
  }
]

export default function RootLayout({children}) {
  return(
    <html>
      <head>
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





