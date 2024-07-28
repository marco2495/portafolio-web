import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { JSX, SVGProps } from "react";

export function Bienvenida() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <header className="sticky top-0 z-50 w-full bg-background/70 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link
            href="#"
            className="text-2xl font-bold tracking-tight text-primary flex items-center gap-2"
            prefetch={false}
          >
            <BoltIcon className="h-8 w-8" />
            Marco Miranda
          </Link>
          <nav className="hidden space-x-4 md:flex">
            <Link href="#" className="text-sm font-medium transition-colors hover:text-primary" prefetch={false}>
              Acerca de mí
            </Link>
            <Link href="#" className="text-sm font-medium transition-colors hover:text-primary" prefetch={false}>
              Habilidades
            </Link>
            <Link href="#" className="text-sm font-medium transition-colors hover:text-primary" prefetch={false} />
            <Link href="#" className="text-sm font-medium transition-colors hover:text-primary" prefetch={false}>
              Contacto
            </Link>
          </nav>
          <Button variant="outline" size="sm" className="md:hidden">
            <MenuIcon className="h-5 w-5" />
            <span className="sr-only">Toggle navigation</span>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section id="hero" className=" from-primary to-primary-foreground py-24 text-center text-primary-foreground">
          <div className="container">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Bienvenido a mí portafolio</h1>
            <p className="mt-4 text-lg md:text-xl">¡Descubre mis proyectos!</p>
          </div>
        </section>
        <section id="about" className="bg-muted py-16">
          <div className="container">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h2 className="text-4xl font-bold tracking-tighter sm: text-center md:">Acerca de mí</h2>
                <p className="text-2xl mt-4 text-muted-foreground sm: text-justify">
                  ¡Hola! Soy Marco, un desarrollador web que disfruta dando vida a nuevas ideas.
                  Te invito a explorar mi portafolio y descubrir cómo puedo convertir tus conceptos en soluciones digitales tangibles.
                </p>
                <p className="text-2xl mt-4 text-muted-foreground sm: text-justify">
                  En mi tiempo libre, me gusta experimentar con nuevas tecnologías, estar al día con las últimas tendencias del sector.
                  ¡Espero que disfrutes tu visita!
                </p>
              </div>
              <div className="flex items-center justify-center">
                <img src="./perfil.jpeg" width={400} height={400} alt="About" className="rounded-lg object-cover" />
              </div>
            </div>
          </div>
        </section>
        <section id="skills" className="py-16">
          <div className="container">
            <h2 className="pl-12 text-3xl font-bold tracking-tighter">Mis Habilidades</h2>
            <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              <div className="flex flex-col items-center gap-2">
                <CodepenIcon className="h-12 w-12 text-primary" />
                <span className="text-sm font-medium">React</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <NetworkIcon className="h-12 w-12 text-primary" />
                <span className="text-sm font-medium">Node.js</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <WindIcon className="h-12 w-12 text-primary" />
                <span className="text-sm font-medium">Tailwind CSS</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <FastForwardIcon className="h-12 w-12 text-primary" />
                <span className="text-sm font-medium">Next.js</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <TypeIcon className="h-12 w-12 text-primary" />
                <span className="text-sm font-medium">TypeScript</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <GitGraphIcon className="h-12 w-12 text-primary" />
                <span className="text-sm font-medium">Git</span>
              </div>
            </div>
          </div>
        </section>
        <section id="projects" className="bg-muted py-16">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tighter sm: text-center">Mis projectos</h2>
            <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 text-center lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>E-commerce básico</CardTitle>
                  <CardDescription>Usando tecnología vite ReactJS</CardDescription>
                </CardHeader>
                <CardContent>
                  <img
                    src="./image1.jpeg"
                    width={400}
                    height={300}
                    alt="Project 1"
                    className="rounded-lg object-cover"
                  />
                </CardContent>
                <CardFooter>
                  <Link
                    href="https://marco2495.github.io/tienda-online/"
                    className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    prefetch={false}
                  >
                    Ver Proyecto
                  </Link>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Calculadora básica</CardTitle>
                  <CardDescription>
                    Usando tecnología vite ReactJS
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <img
                    src="./image2.jpg"
                    width={400}
                    height={300}
                    alt="Project 2"
                    className="rounded-lg object-cover"
                  />
                </CardContent>
                <CardFooter>
                  <Link
                    href="https://marco2495.github.io/calculadora/"
                    className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    prefetch={false}
                  >
                    Ver Proyecto
                  </Link>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Lista de tareas básico</CardTitle>
                  <CardDescription>
                    Usando tecnología vite ReactJS
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <img
                    src="./image4.jpeg"
                    width={400}
                    height={300}
                    alt="Project 3"
                    className="rounded-lg object-cover"
                  />
                </CardContent>
                <CardFooter>
                  <Link
                    href="https://marco2495.github.io/to-do-list/"
                    className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    prefetch={false}
                  >
                    Ver Proyecto
                  </Link>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Blog básico</CardTitle>
                  <CardDescription>
                    Usando tecnología vite ReactJS
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <img
                    src="./image3.jpeg"
                    width={400}
                    height={300}
                    alt="Project 3"
                    className="rounded-lg object-cover"
                  />
                </CardContent>
                <CardFooter>
                  <Link
                    href="https://marco2495.github.io/blog-personal/"
                    className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    prefetch={false}
                  >
                    Ver Proyecto
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        <section id="contact" className="bg-background py-16">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tighter">Contacto</h2>
            <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
              <div>
                <p className="text-muted-foreground">
                  No dudes en contactarme si tienes alguna pregunta o propuesta de colaboración.
                </p>
                <div className="mt-4 flex flex-col gap-4">
                <div className="flex items-center gap-2">
                    <MailIcon className="h-6 w-6 text-primary" />
                    <a
                      href="mailto:marco_contacto@proton.me"
                      rel="noopener noreferrer"
                      target="_blank"
                      className="underline underline-offset-2"
                    >Correo/Email</a>
                  </div>
                  <div className="flex items-center gap-2">
                    <LinkedinIcon className="h-6 w-6 text-primary" />
                    <a
                      href="https://www.linkedin.com/in/marco845062237"
                      rel="noopener noreferrer"
                      target="_blank"
                      className="underline underline-offset-2"
                    >LinkedIn</a>
                  </div>
                  <div className="flex items-center gap-2">
                    <GitlabIcon className="h-6 w-6 text-primary" />
                    <a
                      href="https://github.com/marco2495"
                      rel="noopener noreferrer"
                      target="_blank"
                      className="underline underline-offset-2"
                    >GitHub</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-primary py-6 text-primary-foreground">
        <div className="container flex items-center justify-between">
          <p className="text-sm">&copy; 2024 Marco Antonio. Todos los derechos reservados.</p>
          <nav className="hidden space-x-4 md:flex">
            <Link
              href="#"
              className="text-sm font-medium transition-colors hover:text-primary-foreground/80"
              prefetch={false}
            >
              Política de Privacidad
            </Link>
            <Link
              href="#"
              className="text-sm font-medium transition-colors hover:text-primary-foreground/80"
              prefetch={false}
            >
              Terminos del servicio
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

function BoltIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  )
}


function CodepenIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
      <line x1="12" x2="12" y1="22" y2="15.5" />
      <polyline points="22 8.5 12 15.5 2 8.5" />
      <polyline points="2 15.5 12 8.5 22 15.5" />
      <line x1="12" x2="12" y1="2" y2="8.5" />
    </svg>
  )
}


function FastForwardIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="13 19 22 12 13 5 13 19" />
      <polygon points="2 19 11 12 2 5 2 19" />
    </svg>
  )
}


function GitGraphIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="5" cy="6" r="3" />
      <path d="M5 9v6" />
      <circle cx="5" cy="18" r="3" />
      <path d="M12 3v18" />
      <circle cx="19" cy="6" r="3" />
      <path d="M16 15.7A9 9 0 0 0 19 9" />
    </svg>
  )
}


function GitlabIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-2.26 6.67H8.32L6.1 3.26a.42.42 0 0 0-.1-.18.38.38 0 0 0-.26-.08.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83Z" />
    </svg>
  )
}


function LinkedinIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}


function MailIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}


function MenuIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function NetworkIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="16" y="16" width="6" height="6" rx="1" />
      <rect x="2" y="16" width="6" height="6" rx="1" />
      <rect x="9" y="2" width="6" height="6" rx="1" />
      <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" />
      <path d="M12 12V8" />
    </svg>
  )
}


function PhoneIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}


function TypeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="4 7 4 4 20 4 20 7" />
      <line x1="9" x2="15" y1="20" y2="20" />
      <line x1="12" x2="12" y1="4" y2="20" />
    </svg>
  )
}


function WindIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2" />
      <path d="M9.6 4.6A2 2 0 1 1 11 8H2" />
      <path d="M12.6 19.4A2 2 0 1 0 14 16H2" />
    </svg>
  )
}


function XIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}
