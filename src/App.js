import React from 'react';
import './App.css';
import profile from './profile_photo_web.jpg';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900 text-white flex flex-col items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent z-0"></div>

      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
        className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-20 px-4 text-center w-full z-10"
      >
        <h1 className="text-5xl font-bold mb-4">Hi, I'm Alok</h1>
        <motion.img
          src={profile}
          alt="Alok Profile"
          className="w-32 h-32 rounded-full border-4 border-white shadow-lg mx-auto mb-4"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        />
        <p className="text-xl">Aspiring Web Developer | CSE Student at KIIT</p>

        <div className="flex justify-center mt-4 gap-4">
          <a href="https://github.com/alokkbhardwaj" target="_blank" rel="noopener noreferrer">
            <FaGithub className="h-8 w-8 text-white hover:text-purple-400 transition-transform hover:scale-110" />
          </a>
          <a href="https://www.linkedin.com/in/alok-bhardwaj-249427295/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="h-8 w-8 text-white hover:text-purple-400 transition-transform hover:scale-110" />
          </a>
        </div>
      </motion.div>

      {/* About Me */}
      <motion.section 
        className="bg-white py-16 px-6 text-center text-gray-800 w-full z-10"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-4">About Me</h2>
        <p className="max-w-3xl mx-auto text-lg leading-relaxed">
          I’m <span className="text-purple-600 font-semibold">Alok</span>, a passionate Computer Science student from KIIT University.
          I enjoy building modern websites using React and Tailwind CSS. I’m always learning and love experimenting with new tech.
        </p>
      </motion.section>

      {/* Projects */}
      <motion.section 
        className="bg-gray-900 py-16 px-6 text-white w-full z-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[{
            title: 'Portfolio Website',
            desc: 'A modern personal portfolio using React & Tailwind CSS with responsive design and animated transitions.',
            link: 'https://github.com/alokkbhardwaj/portfolio'
          },
          {
            title: 'Weather App',
            desc: 'Built using HTML, CSS & JavaScript with real-time weather API integration. Clean UI and responsive.',
            link: 'https://github.com/alokkbhardwaj/weather-app'
          },
          {
            title: 'To-Do List App',
            desc: 'A functional to-do app with add/remove/edit feature using vanilla JavaScript and local storage.',
            link: 'https://github.com/alokkbhardwaj/todo-app'
          }].map((project, idx) => (
            <motion.div 
              key={idx} 
              className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-purple-500/30 transition"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm mb-4">{project.desc}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:underline">View Code</a>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Skills */}
      <motion.section 
        className="bg-white py-16 px-6 text-center text-gray-800 w-full z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-10">Skills</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[{
            title: 'C++', desc: 'Problem Solving, STL'
          }, {
            title: 'DSA', desc: 'LinkedList, Trees, Graphs, DP'
          }, {
            title: 'DBMS', desc: 'SQL, Normalization, ER Diagrams'
          }, {
            title: 'OOPs', desc: 'Encapsulation, Inheritance, Polymorphism'
          }, {
            title: 'React + Tailwind', desc: 'Modern UI Development'
          }, {
            title: 'Git & GitHub', desc: 'Version Control & Collaboration'
          }, {
            title: 'Operating System', desc: 'Processes, Threads, Scheduling'
          }, {
            title: 'Networking', desc: 'OSI Model, TCP/IP, Protocols'
          }].map((skill, idx) => (
            <motion.div 
              key={idx} 
              className="bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-purple-300 transition"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-lg font-semibold">{skill.title}</h3>
              <p className="text-sm mt-1">{skill.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Game Section */}
      <motion.section 
        className="py-16 px-6 text-center text-white w-full z-10 bg-gradient-to-r from-indigo-600 to-purple-600"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-6">🎮 Play a Game</h2>
        <TicTacToe />
      </motion.section>

      {/* Contact */}
      <motion.section 
        className="py-20 px-4 bg-gray-100 text-gray-800 w-full z-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-4">Contact</h2>
        <p className="mb-4">Feel free to reach out to me via email or connect on LinkedIn.</p>
        <ul>
          <li>Email: <a href="mailto:alokb0599@gmail.com" className="text-blue-500 hover:underline">alokb0599@gmail.com</a></li>
          <li>Email (College): <a href="mailto:23052390@kiit.ac.in" className="text-blue-500 hover:underline">23052390@kiit.ac.in</a></li>
          <li>LinkedIn: <a href="https://www.linkedin.com/in/alok-bhardwaj-249427295/" className="text-blue-500 hover:underline">linkedin.com/in/alok-bhardwaj-249427295</a></li>
        </ul>
      </motion.section>
    </div>
  );
}

// ================= Tic Tac Toe Component =================
function TicTacToe() {
  const [board, setBoard] = React.useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = React.useState(true);

  const winner = calculateWinner(board);

  function handleClick(i) {
    if (board[i] || winner) return;
    const newBoard = board.slice();
    newBoard[i] = xIsNext ? "X" : "O";
    setBoard(newBoard);
    setXIsNext(!xIsNext);
  }

  function resetGame() {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
  }

  function renderCell(i) {
    return (
      <button
        onClick={() => handleClick(i)}
        className="w-16 h-16 md:w-20 md:h-20 bg-white text-gray-800 text-2xl md:text-3xl font-bold border-2 border-purple-700 hover:bg-purple-100 transition"
      >
        {board[i]}
      </button>
    );
  }

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="grid grid-cols-3 gap-2">
        {board.map((_, i) => renderCell(i))}
      </div>
      <p className="text-lg font-semibold mt-4">
        {winner ? <>🎉 Winner: {winner}</> : <>Next Player: {xIsNext ? "X" : "O"}</>}
      </p>
      <button
        onClick={resetGame}
        className="mt-2 px-4 py-2 bg-white text-purple-700 font-semibold rounded hover:bg-purple-100 transition"
      >
        Restart Game
      </button>
    </div>
  );
}

function calculateWinner(cells) {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];
  for (let [a, b, c] of lines) {
    if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
      return cells[a];
    }
  }
  return null;
}

export default App;
