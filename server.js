// Import required modules
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const { spawn } = require('child_process');

const app = express();
const PORT = 3000;

let isRunning = false; // Track if a focus session is running
let focusProcess; // Store the running focus process

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/userDB2', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Database connection error:', err));

// Define User schema
const userSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    password: String
});

const User = mongoose.model('User', userSchema);

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));

// Run Focus Command
// Run Focus Command
// Run Focus Command
app.post('/run-focus', (req, res) => {
    const { action, time, task } = req.body;

    console.log("Received Action:", action);
    console.log("Received Time:", time);
    console.log("Received Task:", task);

    if (action === "start" && !isRunning) {
        // Build the command
        const command = `cd /home/nitin/Documents/DeepSync-master/blocksites/focus && sudo focus --time ${time} --task "${task}"`;

        // Spawn the focus process
        focusProcess = spawn(command, { shell: true });
        isRunning = true;

        let stdoutBuffer = '';
        let stderrBuffer = '';

        focusProcess.stdout.on('data', (data) => {
            stdoutBuffer += data.toString();
            if (stdoutBuffer.includes('Blocked websites for')) {
                console.log(stdoutBuffer.trim());
                stdoutBuffer = ''; // Clear buffer
            }
        });

        focusProcess.stderr.on('data', (data) => {
            stderrBuffer += data.toString();
            if (!stderrBuffer.includes('⢹') && !stderrBuffer.includes('⢺')) {
                console.error(stderrBuffer.trim());
                stderrBuffer = ''; // Clear buffer
            }
        });

        focusProcess.on('close', (code) => {
            console.log(`Focus process exited with code ${code}`);
            isRunning = false;
        });

        res.json({ success: true, message: "Focus session started successfully." });

    } else if (action === "pause" && isRunning) {
        // Kill the process when pausing
        focusProcess.kill('SIGTERM');
        isRunning = false;
        console.log("Focus session paused");
        res.json({ success: true, message: "Focus session paused successfully." });

    } else if (action === "start" && isRunning) {
        res.status(400).json({ success: false, message: "Focus session is already running." });

    } else {
        res.status(400).json({ success: false, message: "Invalid action or focus session not started yet." });
    }
});



// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, 'register.html'));
});

app.post('/register', async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).send('User already exists. Please log in.');
        }

        const newUser = new User({ name, email, password });
        await newUser.save();
        res.redirect('/');
    } catch (err) {
        console.error('Error during registration:', err);
        res.status(500).send('Internal Server Error');
    }
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (user && user.password === password) {
            res.redirect('/dashboard');
        } else {
            res.status(401).send('Invalid email or password');
        }
    } catch (err) {
        console.error('Error during login:', err);
        res.status(500).send('Internal Server Error');
    }
});

app.get('/dashboard', (req, res) => {
    res.redirect('http://localhost:3000/Roadmaps/index.html');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});

