// import Link from "next/link";
// import { Heart, Github, Twitter, Mail } from "lucide-react";

// export default function Footer() {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="bg-gray-900 text-gray-300 mt-20">
//       <div className="max-w-7xl mx-auto px-4 py-12">

//         {/* Top Section */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">

//           {/* Brand */}
//           <div>
//             <h2 className="text-white text-xl font-bold mb-3">
//               KeenKeeper
//             </h2>
//             <p className="text-sm text-gray-400">
//               Keep your friendships strong and never lose touch with people who matter.
//             </p>
//           </div>

//           {/* Links */}
//           <div>
//             <h3 className="text-white font-semibold mb-3">Links</h3>
//             <ul className="space-y-2 text-sm">
//               <li><Link href="/">Home</Link></li>
//               <li><Link href="/timeline">Timeline</Link></li>
//               <li><Link href="/stats">Stats</Link></li>
//             </ul>
//           </div>

//           {/* Features */}
//           <div>
//             <h3 className="text-white font-semibold mb-3">Features</h3>
//             <ul className="space-y-2 text-sm">
//               <li>Friend Management</li>
//               <li>Analytics</li>
//               <li>Reminders</li>
//               <li>Dashboard</li>
//             </ul>
//           </div>

//           {/* Social */}
//           <div>
//             <h3 className="text-white font-semibold mb-3">Social</h3>
//             <div className="flex gap-4">
//               <a href="#"><GitHub size={20} /></a>
//               <a href="#"><Twitter size={20} /></a>
//               <a href="#"><Mail size={20} /></a>
//             </div>
//           </div>

//         </div>

//         {/* Bottom */}
//         <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row justify-between items-center text-sm">

//           <p>© {currentYear} KeenKeeper. All rights reserved.</p>

//           <p className="flex items-center gap-2 mt-2 sm:mt-0">
//             Made with <Heart size={16} className="text-red-500" /> for friendship
//           </p>

//         </div>

//       </div>
//     </footer>
//   );
// }