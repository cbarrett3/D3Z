'use client'

import { useState, useEffect } from 'react'
import { BarChart, Github, Puzzle, Zap, Shrub, Sun, Moon } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import D3BarChart from '@/components/d3-bar-chart';
import D3LineChart from '@/components/d3-line-chart';
import D3DonutChart from '@/components/d3-donut-chart';
import D3TreeMap from '@/components/d3-tree-map';

export default function Home() {
   const [activeTab, setActiveTab] = useState('bar')

   // Example data for the bar chart
   const barData = [
      { name: 'A', value: 30 },
      { name: 'B', value: 80 },
      { name: 'C', value: 45 },
      { name: 'D', value: 60 },
      { name: 'E', value: 20 },
      { name: 'F', value: 90 },
      { name: 'G', value: 55 },
   ];

   // Example data for the line chart
   const lineData = [
      { name: 'oceans', dataset1: 50, dataset2: 40 },
      { name: 'forests', dataset1: 70, dataset2: 65 },
      { name: 'deserts', dataset1: 90, dataset2: 80 },
   ];

   // Example data for the tree map
   const treeMapData = {
      name: 'root',
      children: [
         { name: 'Category 1', value: 100 },
         { name: 'Category 2', value: 200 },
         { name: 'Category 3', value: 300 },
      ],
   };

   // Example data for the donut chart
   const donutData = [
      { name: 'Category 1', value: 30 },
      { name: 'Category 2', value: 70 },
      { name: 'Category 3', value: 45 },
      { name: 'Category 4', value: 60 },
      { name: 'Category 5', value: 20 },
   ];

   const [theme, setTheme] = useState('dark')

   useEffect(() => {
      const savedTheme = localStorage.getItem('theme') || 'light';
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
   }, []);

   const toggleTheme = () => {
      const newTheme = theme === 'dark' ? 'light' : 'dark';
      setTheme(newTheme);
      localStorage.setItem('theme', newTheme);
      document.documentElement.classList.toggle('dark', newTheme === 'dark');
   };

   return (
      <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
         <header className="px-4 lg:px-6 h-16 flex items-center backdrop-blur-md bg-white/30 dark:bg-black/30 border-b border-gray-200/50 dark:border-gray-700/50 shadow-md">
            <Link className="flex items-center justify-center" href="#">
               <BarChart className="h-6 w-6 text-amber-600 dark:text-amber-400" />
               <span className="ml-2 text-2xl font-bold text-amber-800 dark:text-amber-100 drop-shadow-[0_1px_1px_rgba(0,0,0,0.1)] dark:drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]">d3z</span>
            </Link>
            <TooltipProvider>
               <nav className="ml-auto flex items-center gap-4 sm:gap-6">
                  <Tooltip>
                     <TooltipTrigger asChild>
                        <Link className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-300 transition-colors duration-200 hover:scale-105" href="#">
                           Documentation
                        </Link>
                     </TooltipTrigger>
                     <TooltipContent>
                        <p>Coming Soon</p>
                     </TooltipContent>
                  </Tooltip>
                  <Tooltip>
                     <TooltipTrigger asChild>
                        <Link className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-300 transition-colors duration-200 hover:scale-105" href="#">
                           Examples
                        </Link>
                     </TooltipTrigger>
                     <TooltipContent>
                        <p>Coming Soon</p>
                     </TooltipContent>
                  </Tooltip>
                  <Link className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-300 transition-colors duration-200 hover:scale-105" href="https://github.com/cbarrett3/d3z">
                     <Github className="h-5 w-5" />
                  </Link>
                  <Button variant="ghost" size="icon" onClick={toggleTheme} className="h-9 w-9 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200">
                     {theme === 'dark' ? (
                        <Sun className="h-5 w-5 text-yellow-500" />
                     ) : (
                        <Moon className="h-5 w-5 text-gray-800 dark:text-gray-200" />
                     )}
                  </Button>
               </nav>
            </TooltipProvider>
         </header>
         <main className="flex-1 py-12 md:py-16 lg:py-24">
            <div className="container px-4 md:px-6">
               <div className="flex flex-col items-center space-y-4 text-center">
                  <div className="space-y-2">
                     <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-amber-600 via-amber-500 to-amber-700 dark:from-amber-400 dark:via-amber-300 dark:to-amber-500 drop-shadow-[0_2px_2px_rgba(0,0,0,0.1)] dark:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                        Data Drive Documents - Easy!
                     </h1>
                     <p className="mx-auto max-w-[700px] text-gray-700 dark:text-gray-400 md:text-xl drop-shadow-[0_1px_1px_rgba(0,0,0,0.1)] dark:drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]">
                        Powerful, customizable, and easy-to-use D3.js components for React. Build stunning data visualizations in minutes and seamlessly integrate them into your apps with simple copy and paste.
                     </p>
                  </div>
                  {/* <div className="space-x-4">
                     <Button className="bg-amber-600 text-white hover:bg-amber-500 dark:bg-amber-500 dark:text-gray-900 dark:hover:bg-amber-400 shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1">
                        Get Started
                     </Button> 
                     <Link href="https://github.com/cbarrett3/d3z" passHref>
                        <Button variant="outline" className="border-amber-600 text-amber-700 hover:bg-amber-100/50 dark:border-amber-400 dark:text-amber-300 dark:hover:bg-gray-800/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1">
                           View on GitHub
                        </Button>
                     </Link>
                  </div> */}
               </div>
               <div className="mt-12 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
                  <div className="flex flex-col space-y-2 bg-white/50 dark:bg-gray-800/50 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1">
                     <Puzzle className="h-8 w-8 text-amber-600 dark:text-amber-400" />
                     <h3 className="text-xl font-semibold text-amber-800 dark:text-amber-100">Full Creative Control</h3>
                     <p className="text-gray-700 dark:text-gray-400">Integrate stunning visuals into your apps with simple copy and paste. You own the code.</p>
                  </div>
                  <div className="flex flex-col space-y-2 bg-white/50 dark:bg-gray-800/50 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1">
                     <Zap className="h-8 w-8 text-amber-600 dark:text-amber-400" />
                     <h3 className="text-xl font-semibold text-amber-800 dark:text-amber-100">Rapid Interactivity</h3>
                     <p className="text-gray-700 dark:text-gray-400">Lighting quick and extremely minimal. D3.js is the only dependency.</p>
                  </div>
                  <div className="flex flex-col space-y-2 bg-white/50 dark:bg-gray-800/50 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1">
                     <Shrub className="h-8 w-8 text-amber-600 dark:text-amber-400" />
                     <h3 className="text-xl font-semibold text-amber-800 dark:text-amber-100">Unlimited Possibillities</h3>
                     <p className="text-gray-700 dark:text-gray-400">Take complexity head on. There are no constraints.</p>
                  </div>
               </div>
               <div className="mt-16">
                  <Tabs defaultValue="bar" className="w-full max-w-4xl mx-auto" onValueChange={setActiveTab}>
                     <TabsList className="grid w-full grid-cols-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-md rounded-t-lg shadow-md">
                        <TabsTrigger value="bar" className={`${activeTab === 'bar' ? 'text-amber-600 dark:text-amber-400' : 'text-gray-600 dark:text-gray-400'} transition-colors duration-200 hover:bg-white/30 dark:hover:bg-gray-700/30`}>
                           Bar Chart
                        </TabsTrigger>
                        <TabsTrigger value="line" className={`${activeTab === 'line' ? 'text-amber-600 dark:text-amber-400' : 'text-gray-600 dark:text-gray-400'} transition-colors duration-200 hover:bg-white/30 dark:hover:bg-gray-700/30`}>
                           Line Chart
                        </TabsTrigger>
                        <TabsTrigger value="tree-map" className={`${activeTab === 'tree-map' ? 'text-amber-600 dark:text-amber-400' : 'text-gray-600 dark:text-gray-400'} transition-colors duration-200 hover:bg-white/30 dark:hover:bg-gray-700/30`}>
                           Tree Map
                        </TabsTrigger>
                        <TabsTrigger value="donut" className={`${activeTab === 'donut' ? 'text-amber-600 dark:text-amber-400' : 'text-gray-600 dark:text-gray-400'} transition-colors duration-200 hover:bg-white/30 dark:hover:bg-gray-700/30`}>
                           Donut Chart
                        </TabsTrigger>
                     </TabsList>
                     <TabsContent value="bar" className="p-6 bg-white/30 dark:bg-gray-800/30 backdrop-blur-md rounded-b-lg mt-1 border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-200">
                        <div className="h-64 flex items-center justify-center">
                           <D3BarChart data={barData} xAxisTitle="Categories" yAxisTitle="Values" />
                        </div>
                        <pre className="mt-4 p-4 bg-gray-100/80 dark:bg-black/50 rounded-md overflow-x-auto backdrop-blur-sm shadow-inner">
                           <code className="text-sm text-gray-800 dark:text-gray-300">
                              {`import D3BarChart from '@/components/d3-bar-chart';

export default function MyChart() {
  const data = [
    { name: 'A', value: 30 },
    { name: 'B', value: 80 },
    { name: 'C', value: 45 },
    { name: 'D', value: 60 },
    { name: 'E', value: 20 },
    { name: 'F', value: 90 },
    { name: 'G', value: 55 },
  ];

  return <D3BarChart data={data} xAxisTitle="Categories" yAxisTitle="Values" />;
}`}
                           </code>
                        </pre>
                     </TabsContent>
                     <TabsContent value="line" className="p-6 bg-white/30 dark:bg-gray-800/30 backdrop-blur-md rounded-b-lg mt-1 border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-200">
                        <div className="h-64 flex items-center justify-center">
                           <D3LineChart data={lineData} xAxisTitle="Environments" yAxisTitle="Values" />
                        </div>
                        <pre className="mt-4 p-4 bg-gray-100/80 dark:bg-black/50 rounded-md overflow-x-auto backdrop-blur-sm shadow-inner">
                           <code className="text-sm text-gray-800 dark:text-gray-300">
                              {`import D3LineChart from '@/components/d3-line-chart';

export default function MyChart() {
  const data = [
    { name: 'oceans', dataset1: 50, dataset2: 40 },
    { name: 'forests', dataset1: 70, dataset2: 65 },
    { name: 'deserts', dataset1: 90, dataset2: 80 },
  ];

  return <D3LineChart data={data} xAxisTitle="Environments" yAxisTitle="Values" />;
}`}
                           </code>
                        </pre>
                     </TabsContent>
                     <TabsContent value="tree-map" className="p-6 bg-white/30 dark:bg-gray-800/30 backdrop-blur-md rounded-b-lg mt-1 border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-200">
                        <div className="h-64 flex items-center justify-center">
                           <D3TreeMap data={treeMapData} title="Tree Map Example" />
                        </div>
                        <pre className="mt-4 p-4 bg-gray-100/80 dark:bg-black/50 rounded-md overflow-x-auto backdrop-blur-sm shadow-inner">
                           <code className="text-sm text-gray-800 dark:text-gray-300">
                              {`import D3TreeMap from '@/components/d3-tree-map';

export default function MyChart() {
  const data = {
    name: 'root',
    children: [
      { name: 'Category 1', value: 100 },
      { name: 'Category 2', value: 200 },
      { name: 'Category 3', value: 300 },
    ],
  };

  return <D3TreeMap data={data} title="Tree Map Example" />;
}`}
                           </code>
                        </pre>
                     </TabsContent>
                     <TabsContent value="donut" className="p-6 bg-white/30 dark:bg-gray-800/30 backdrop-blur-md rounded-b-lg mt-1 border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-200">
                        <div className="h-64 flex items-center justify-center">
                           <D3DonutChart data={donutData} title="Donut Chart Example" />
                        </div>
                        <pre className="mt-4 p-4 bg-gray-100/80 dark:bg-black/50 rounded-md overflow-x-auto backdrop-blur-sm shadow-inner">
                           <code className="text-sm text-gray-800 dark:text-gray-300">
                              {`import D3DonutChart from '@/components/d3-donut-chart';

export default function MyChart() {
  const data = [
    { name: 'Category 1', value: 30 },
    { name: 'Category 2', value: 70 },
    { name: 'Category 3', value: 45 },
    { name: 'Category 4', value: 60 },
    { name: 'Category 5', value: 20 },
  ];

  return <D3DonutChart data={data} title="Donut Chart Example" />;
}`}
                           </code>
                        </pre>
                     </TabsContent>
                  </Tabs>
               </div>
            </div>
         </main>
         <footer className="mt-auto py-6 w-full border-t border-gray-200/50 dark:border-gray-700/50 backdrop-blur-md bg-white/30 dark:bg-black/30 shadow-md">
            <div className="container flex flex-col gap-2 sm:flex-row items-center px-4 md:px-6">
               <p className="text-xs text-gray-600 dark:text-gray-400">© 2024 d3z. All rights reserved.</p>
               <nav className="sm:ml-auto flex gap-4 sm:gap-6">
                  <Link className="text-xs text-gray-600 dark:text-gray-400 hover:text-amber-600 dark:hover:text-amber-300 transition-colors duration-200 hover:underline" href="#">
                     Terms of Service
                  </Link>
                  <Link className="text-xs text-gray-600 dark:text-gray-400 hover:text-amber-600 dark:hover:text-amber-300 transition-colors duration-200 hover:underline" href="#">
                     Privacy
                  </Link>
               </nav>
            </div>
         </footer>
      </div>
   )
}