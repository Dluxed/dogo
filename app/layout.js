import Link from "next/link";
import 'semantic-ui-css/semantic.min.css';

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
  }
]

//Exportar navar para colocarlo en las paginas
export default function RootLayout({children}) {
  return(
    <html>
      <head>
        <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.main"></link>
        <title>Dogo Traductor</title>
      </head>

      <body>
      <nav> {/*Navbar*/}
          <ul>
            {NavbarLay.map(({ label, route }) => (
              <li>
                <Link href={ route }> {label}</Link>
              </li>
            ))}
          
          </ul>
      </nav>
        {children}</body>
    </html>
  )
}





