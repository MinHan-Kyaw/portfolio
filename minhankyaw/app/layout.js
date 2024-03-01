import { Ubuntu } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/utils/theme-provider';

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-Ubuntu",
})

export default function RootLayout({children}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={`${ubuntu.variable} w-full min-h-screen bg-gray-200 dark:bg-gray-700 relative`}>
          <ThemeProvider attribute='class' defaultTheme='light'>
            <div className="hidden fixed top-0 left-0 w-full h-screen xl:flex justify-between">
              <div className="h-full flex-1 flex flex-col justify-end pb-8">
                <div className="w-20 h-20 mx-auto rounded-full bg-gray-300 dark:bg-gray-800 shadow-lg"></div>
              </div>
              <div className="w-[75%] "></div>
              <div className="h-full flex-1 pt-8">
                <div className="w-20 h-20 mx-auto rounded-full bg-gray-300 dark:bg-gray-800 shadow-lg"></div>
              </div>
            </div>

            {children}
          </ThemeProvider>  
      </body>
    </html>
  )
}
