// MathQuest App JavaScript

// Application data from the provided JSON
const appData = {
  "sections": [
    {
      "id": "arithmetic",
      "name": "Basic Arithmetic",
      "icon": "➕",
      "color": "#4CAF50",
      "levels": [
        {
          "id": 1,
          "name": "Addition Basics",
          "concept": "Learning to add single-digit numbers",
          "explanation": "Addition means putting numbers together. When you have 2 apples and get 3 more apples, you add them: 2 + 3 = 5 apples total!",
          "examples": ["2 + 3 = 5", "1 + 4 = 5", "3 + 2 = 5"],
          "quiz": [
            {"question": "What is 2 + 1?", "options": ["2", "3", "4"], "correct": 1},
            {"question": "What is 4 + 1?", "options": ["4", "5", "6"], "correct": 1},
            {"question": "What is 3 + 2?", "options": ["4", "5", "6"], "correct": 1}
          ]
        },
        {
          "id": 2,
          "name": "Subtraction Basics",
          "concept": "Learning to subtract single-digit numbers",
          "explanation": "Subtraction means taking away. If you have 5 apples and eat 2, you subtract: 5 - 2 = 3 apples left!",
          "examples": ["5 - 2 = 3", "4 - 1 = 3", "6 - 3 = 3"],
          "quiz": [
            {"question": "What is 5 - 1?", "options": ["3", "4", "5"], "correct": 1},
            {"question": "What is 4 - 2?", "options": ["1", "2", "3"], "correct": 1},
            {"question": "What is 6 - 3?", "options": ["2", "3", "4"], "correct": 1}
          ]
        },
        {
          "id": 3,
          "name": "Multiplication Basics",
          "concept": "Learning to multiply small numbers",
          "explanation": "Multiplication is repeated addition. 3 × 2 means adding 3 two times: 3 + 3 = 6, so 3 × 2 = 6!",
          "examples": ["2 × 2 = 4", "3 × 2 = 6", "2 × 3 = 6"],
          "quiz": [
            {"question": "What is 2 × 3?", "options": ["5", "6", "7"], "correct": 1},
            {"question": "What is 4 × 2?", "options": ["6", "7", "8"], "correct": 2},
            {"question": "What is 3 × 3?", "options": ["8", "9", "10"], "correct": 1}
          ]
        },
        {
          "id": 4,
          "name": "Division Basics",
          "concept": "Learning to divide small numbers",
          "explanation": "Division means sharing equally. If you have 6 cookies and 2 friends, each gets 6 ÷ 2 = 3 cookies!",
          "examples": ["6 ÷ 2 = 3", "8 ÷ 2 = 4", "9 ÷ 3 = 3"],
          "quiz": [
            {"question": "What is 8 ÷ 2?", "options": ["3", "4", "5"], "correct": 1},
            {"question": "What is 9 ÷ 3?", "options": ["2", "3", "4"], "correct": 1},
            {"question": "What is 10 ÷ 2?", "options": ["4", "5", "6"], "correct": 1}
          ]
        },
        {
          "id": 5,
          "name": "Mixed Operations",
          "concept": "Combining all basic operations",
          "explanation": "Now we can solve problems with addition, subtraction, multiplication, and division together!",
          "examples": ["2 + 3 × 2 = 8", "(4 + 2) ÷ 2 = 3", "10 - 2 × 3 = 4"],
          "quiz": [
            {"question": "What is 2 + 3 × 2?", "options": ["7", "8", "10"], "correct": 1},
            {"question": "What is (6 + 2) ÷ 2?", "options": ["3", "4", "5"], "correct": 1},
            {"question": "What is 12 - 3 × 2?", "options": ["5", "6", "7"], "correct": 1}
          ]
        }
      ]
    },
    {
      "id": "algebra",
      "name": "Basic Algebra",
      "icon": "🔤",
      "color": "#2196F3",
      "levels": [
        {
          "id": 1,
          "name": "Understanding Variables",
          "concept": "Variables are letters that represent numbers",
          "explanation": "In algebra, we use letters like x and y to represent unknown numbers. If x = 3, then x + 2 = 3 + 2 = 5!",
          "examples": ["If x = 2, then x + 1 = 3", "If y = 4, then y - 1 = 3", "If a = 5, then a × 2 = 10"],
          "quiz": [
            {"question": "If x = 3, what is x + 2?", "options": ["4", "5", "6"], "correct": 1},
            {"question": "If y = 6, what is y - 2?", "options": ["3", "4", "5"], "correct": 1},
            {"question": "If a = 4, what is a × 2?", "options": ["6", "7", "8"], "correct": 2}
          ]
        },
        {
          "id": 2,
          "name": "Simple Equations",
          "concept": "Solving equations to find the unknown",
          "explanation": "An equation has an equals sign. To solve x + 3 = 7, we ask: what number plus 3 equals 7? The answer is x = 4!",
          "examples": ["x + 2 = 5, so x = 3", "y - 1 = 4, so y = 5", "z × 2 = 6, so z = 3"],
          "quiz": [
            {"question": "Solve: x + 1 = 4", "options": ["x = 2", "x = 3", "x = 5"], "correct": 1},
            {"question": "Solve: y - 2 = 3", "options": ["y = 1", "y = 5", "y = 6"], "correct": 1},
            {"question": "Solve: z × 3 = 9", "options": ["z = 2", "z = 3", "z = 6"], "correct": 1}
          ]
        },
        {
          "id": 3,
          "name": "Expressions with Variables",
          "concept": "Working with algebraic expressions",
          "explanation": "An expression like 2x + 3 means '2 times x, plus 3'. If x = 4, then 2x + 3 = 2×4 + 3 = 8 + 3 = 11!",
          "examples": ["2x + 1 when x = 3 equals 7", "3y - 2 when y = 4 equals 10", "x + 2y when x = 1, y = 2 equals 5"],
          "quiz": [
            {"question": "If x = 2, what is 3x + 1?", "options": ["6", "7", "8"], "correct": 1},
            {"question": "If y = 3, what is 2y - 1?", "options": ["4", "5", "6"], "correct": 1},
            {"question": "If a = 1, what is 4a + 3?", "options": ["6", "7", "8"], "correct": 1}
          ]
        },
        {
          "id": 4,
          "name": "Factoring Basics",
          "concept": "Breaking expressions into simpler parts",
          "explanation": "Factoring means finding what multiplies together to make an expression. For example: 6 = 2 × 3, so we can factor 6 as 2 × 3!",
          "examples": ["8 = 2 × 4", "12 = 3 × 4", "x² = x × x"],
          "quiz": [
            {"question": "What is 10 factored?", "options": ["2 × 4", "2 × 5", "3 × 4"], "correct": 1},
            {"question": "What is 15 factored?", "options": ["3 × 4", "3 × 5", "4 × 5"], "correct": 1},
            {"question": "What is 21 factored?", "options": ["3 × 6", "3 × 7", "4 × 5"], "correct": 1}
          ]
        },
        {
          "id": 5,
          "name": "Advanced Equations",
          "concept": "Solving more complex equations",
          "explanation": "Sometimes we need multiple steps to solve equations. For 2x + 3 = 9, first subtract 3 from both sides, then divide by 2: x = 3!",
          "examples": ["2x + 1 = 7, so x = 3", "3y - 2 = 10, so y = 4", "4a + 2 = 14, so a = 3"],
          "quiz": [
            {"question": "Solve: 2x + 2 = 8", "options": ["x = 2", "x = 3", "x = 4"], "correct": 1},
            {"question": "Solve: 3y - 3 = 6", "options": ["y = 2", "y = 3", "y = 4"], "correct": 1},
            {"question": "Solve: 4a + 4 = 16", "options": ["a = 2", "a = 3", "a = 4"], "correct": 1}
          ]
        }
      ]
    },
    {
      "id": "trigonometry",
      "name": "Basic Trigonometry",
      "icon": "📐",
      "color": "#FF9800",
      "levels": [
        {
          "id": 1,
          "name": "Understanding Angles",
          "concept": "What are angles and how do we measure them?",
          "explanation": "An angle is formed when two lines meet. We measure angles in degrees. A right angle is 90°, like the corner of a square!",
          "examples": ["Right angle = 90°", "Straight line = 180°", "Full circle = 360°"],
          "quiz": [
            {"question": "How many degrees in a right angle?", "options": ["45°", "90°", "180°"], "correct": 1},
            {"question": "How many degrees in a straight line?", "options": ["90°", "180°", "270°"], "correct": 1},
            {"question": "How many degrees in a full circle?", "options": ["270°", "360°", "450°"], "correct": 1}
          ]
        },
        {
          "id": 2,
          "name": "Types of Angles",
          "concept": "Identifying different types of angles",
          "explanation": "Acute angles are less than 90°, right angles are exactly 90°, and obtuse angles are greater than 90° but less than 180°!",
          "examples": ["45° is acute", "90° is right", "120° is obtuse"],
          "quiz": [
            {"question": "What type is a 60° angle?", "options": ["Acute", "Right", "Obtuse"], "correct": 0},
            {"question": "What type is a 90° angle?", "options": ["Acute", "Right", "Obtuse"], "correct": 1},
            {"question": "What type is a 135° angle?", "options": ["Acute", "Right", "Obtuse"], "correct": 2}
          ]
        },
        {
          "id": 3,
          "name": "Introduction to Triangles",
          "concept": "Understanding triangles and their angles",
          "explanation": "A triangle has three sides and three angles. The sum of all angles in any triangle is always 180°!",
          "examples": ["60° + 60° + 60° = 180°", "90° + 45° + 45° = 180°", "30° + 60° + 90° = 180°"],
          "quiz": [
            {"question": "What do triangle angles add up to?", "options": ["90°", "180°", "360°"], "correct": 1},
            {"question": "If two angles are 60° and 70°, what is the third?", "options": ["40°", "50°", "60°"], "correct": 1},
            {"question": "In a right triangle, one angle is:", "options": ["45°", "60°", "90°"], "correct": 2}
          ]
        },
        {
          "id": 4,
          "name": "Basic Sine",
          "concept": "Understanding the sine function",
          "explanation": "Sine helps us find the height in a right triangle. For a 30° angle in a right triangle, sine 30° = 0.5!",
          "examples": ["sin(30°) = 0.5", "sin(45°) ≈ 0.7", "sin(90°) = 1"],
          "quiz": [
            {"question": "What is sin(30°)?", "options": ["0.5", "0.7", "1"], "correct": 0},
            {"question": "What is sin(90°)?", "options": ["0", "0.5", "1"], "correct": 2},
            {"question": "Which is larger: sin(30°) or sin(60°)?", "options": ["sin(30°)", "sin(60°)", "Equal"], "correct": 1}
          ]
        },
        {
          "id": 5,
          "name": "Basic Cosine and Tangent",
          "concept": "Understanding cosine and tangent functions",
          "explanation": "Cosine helps us find the width, and tangent is sine divided by cosine. cos(60°) = 0.5, tan(45°) = 1!",
          "examples": ["cos(60°) = 0.5", "cos(0°) = 1", "tan(45°) = 1"],
          "quiz": [
            {"question": "What is cos(60°)?", "options": ["0.5", "0.7", "1"], "correct": 0},
            {"question": "What is tan(45°)?", "options": ["0.5", "1", "1.7"], "correct": 1},
            {"question": "What is cos(0°)?", "options": ["0", "0.5", "1"], "correct": 2}
          ]
        }
      ]
    }
  ],
  "badges": [
    {"id": "first_lesson", "name": "First Steps", "description": "Complete your first lesson", "icon": "🌟"},
    {"id": "arithmetic_master", "name": "Arithmetic Master", "description": "Complete all arithmetic levels", "icon": "🧮"},
    {"id": "algebra_hero", "name": "Algebra Hero", "description": "Complete all algebra levels", "icon": "🔤"},
    {"id": "trig_expert", "name": "Trigonometry Expert", "description": "Complete all trigonometry levels", "icon": "📐"},
    {"id": "quiz_champion", "name": "Quiz Champion", "description": "Get 100% on 10 quizzes", "icon": "🏆"},
    {"id": "streak_master", "name": "Streak Master", "description": "Study for 7 days in a row", "icon": "🔥"},
    {"id": "perfectionist", "name": "Perfectionist", "description": "Get 100% on a quiz", "icon": "💯"}
  ],
  "sample_leaderboard": [
    {"name": "Priya", "points": 2450, "level": 12},
    {"name": "Arjun", "points": 2200, "level": 11},
    {"name": "Meera", "points": 1980, "level": 10},
    {"name": "Kiran", "points": 1750, "level": 9},
    {"name": "You", "points": 1500, "level": 8}
  ]
};

// App state management
let currentUser = {
  points: 0,
  level: 1,
  streak: 0,
  completedLevels: {},
  earnedBadges: [],
  perfectQuizzes: 0,
  lastStudyDate: null
};

let currentQuiz = {
  section: null,
  levelId: null,
  questions: [],
  currentQuestion: 0,
  answers: [],
  score: 0
};

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
  loadUserData();
  updateUI();
  setupEventListeners();
});

// Data persistence functions
function saveUserData() {
  try {
    localStorage.setItem('mathquest_user', JSON.stringify(currentUser));
  } catch (e) {
    console.warn('Could not save user data to localStorage');
  }
}

function loadUserData() {
  try {
    const savedData = localStorage.getItem('mathquest_user');
    if (savedData) {
      currentUser = { ...currentUser, ...JSON.parse(savedData) };
    }
  } catch (e) {
    console.warn('Could not load user data from localStorage');
  }
}

// UI update functions
function updateUI() {
  updateNavigation();
  updateProgressBars();
  updateProfileStats();
  updateBadges();
  updateLeaderboard();
}

function updateNavigation() {
  const userPoints = document.querySelector('.user-points');
  const userLevel = document.querySelector('.user-level');
  
  if (userPoints) userPoints.textContent = `${currentUser.points} pts`;
  if (userLevel) userLevel.textContent = `Level ${currentUser.level}`;
}

function updateProgressBars() {
  // Update section progress bars
  appData.sections.forEach(section => {
    const completedLevels = Object.keys(currentUser.completedLevels).filter(key => 
      key.startsWith(section.id)).length;
    const totalLevels = section.levels.length;
    const progressPercent = (completedLevels / totalLevels) * 100;
    
    // Update progress bars
    const progressBars = document.querySelectorAll(`[data-section-progress="${section.id}"]`);
    progressBars.forEach(bar => {
      bar.style.width = `${progressPercent}%`;
    });
    
    // Update level counters
    const levelCounters = document.querySelectorAll('.progress-levels');
    const sectionCards = document.querySelectorAll(`[data-section="${section.id}"]`);
    sectionCards.forEach(card => {
      const counter = card.querySelector('.progress-levels');
      if (counter) {
        counter.textContent = `${completedLevels}/${totalLevels} levels complete`;
      }
    });
    
    // Update profile progress text
    const progressText = document.getElementById(`${section.id}-progress-text`);
    if (progressText) {
      progressText.textContent = `${completedLevels}/${totalLevels}`;
    }
  });
  
  // Update overall progress - Fixed selector
  const totalCompleted = Object.keys(currentUser.completedLevels).length;
  const totalLevels = appData.sections.reduce((sum, section) => sum + section.levels.length, 0);
  const overallProgress = totalLevels > 0 ? (totalCompleted / totalLevels) * 100 : 0;
  
  // Find the overall progress bar in the welcome section
  const overallProgressBar = document.querySelector('.total-progress .progress-fill');
  if (overallProgressBar) {
    overallProgressBar.style.width = `${overallProgress}%`;
  }
  
  const progressText = document.querySelector('.total-progress .progress-text');
  if (progressText) {
    progressText.textContent = `${Math.round(overallProgress)}% Complete`;
  }
}

function updateProfileStats() {
  const profilePoints = document.getElementById('profile-points');
  const profileLevel = document.getElementById('profile-level');
  const profileStreak = document.getElementById('profile-streak');
  
  if (profilePoints) profilePoints.textContent = currentUser.points;
  if (profileLevel) profileLevel.textContent = currentUser.level;
  if (profileStreak) profileStreak.textContent = currentUser.streak;
}

function updateBadges() {
  const userBadgesContainer = document.getElementById('user-badges');
  const latestBadgeContainer = document.getElementById('latest-badge');
  
  if (!userBadgesContainer) return;
  
  userBadgesContainer.innerHTML = '';
  
  appData.badges.forEach(badge => {
    const isEarned = currentUser.earnedBadges.includes(badge.id);
    const badgeElement = document.createElement('div');
    badgeElement.className = `badge-item ${isEarned ? 'earned' : ''}`;
    badgeElement.innerHTML = `
      <span class="badge-icon">${badge.icon}</span>
      <span class="badge-name">${badge.name}</span>
      <span class="badge-description">${badge.description}</span>
    `;
    userBadgesContainer.appendChild(badgeElement);
  });
  
  // Update latest badge showcase
  if (latestBadgeContainer && currentUser.earnedBadges.length > 0) {
    const latestBadgeId = currentUser.earnedBadges[currentUser.earnedBadges.length - 1];
    const latestBadge = appData.badges.find(b => b.id === latestBadgeId);
    if (latestBadge) {
      latestBadgeContainer.className = 'badge-showcase earned';
      latestBadgeContainer.innerHTML = `
        <span style="font-size: 2rem; margin-bottom: 8px; display: block;">${latestBadge.icon}</span>
        <strong>${latestBadge.name}</strong>
        <p style="margin: 4px 0 0 0; font-size: 0.875rem;">${latestBadge.description}</p>
      `;
    }
  }
}

function updateLeaderboard() {
  const leaderboardList = document.getElementById('leaderboard-list');
  const userRankCard = document.querySelector('.your-rank .user-rank');
  
  if (!leaderboardList) return;
  
  leaderboardList.innerHTML = '';
  
  // Create updated leaderboard with current user
  const leaderboard = [...appData.sample_leaderboard];
  leaderboard[4] = { name: "You", points: currentUser.points, level: currentUser.level };
  leaderboard.sort((a, b) => b.points - a.points);
  
  leaderboard.forEach((entry, index) => {
    const rankCard = document.createElement('div');
    rankCard.className = `rank-card ${entry.name === 'You' ? 'user-rank' : ''}`;
    rankCard.innerHTML = `
      <span class="rank-number">${index + 1}</span>
      <div class="rank-info">
        <span class="rank-name">${entry.name}</span>
        <span class="rank-points">${entry.points} points</span>
      </div>
      <span class="rank-level">Level ${entry.level}</span>
    `;
    leaderboardList.appendChild(rankCard);
  });
  
  // Update your rank section
  if (userRankCard) {
    const userRank = leaderboard.findIndex(entry => entry.name === 'You') + 1;
    userRankCard.querySelector('.rank-number').textContent = userRank;
    userRankCard.querySelector('.rank-points').textContent = `${currentUser.points} points`;
    userRankCard.querySelector('.rank-level').textContent = `Level ${currentUser.level}`;
  }
}

// Event listeners
function setupEventListeners() {
  // Section card clicks
  document.querySelectorAll('.section-card').forEach(card => {
    card.addEventListener('click', function() {
      const sectionId = this.dataset.section;
      showSectionLevels(sectionId);
    });
  });
  
  // Bottom navigation
  document.querySelectorAll('.bottom-nav .nav-item').forEach(item => {
    item.addEventListener('click', function() {
      document.querySelectorAll('.bottom-nav .nav-item').forEach(nav => 
        nav.classList.remove('active'));
      this.classList.add('active');
    });
  });
  
  // Leaderboard tabs
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.tab-btn').forEach(tab => 
        tab.classList.remove('active'));
      this.classList.add('active');
    });
  });
}

// Screen navigation
function showScreen(screenId) {
  document.querySelectorAll('.screen').forEach(screen => 
    screen.classList.remove('active'));
  
  const targetScreen = document.getElementById(screenId);
  if (targetScreen) {
    targetScreen.classList.add('active');
  }
  
  // Update bottom nav
  document.querySelectorAll('.bottom-nav .nav-item').forEach(item => 
    item.classList.remove('active'));
  
  const navMap = {
    'dashboard': 0,
    'profile': 1,
    'leaderboard': 2
  };
  
  if (navMap.hasOwnProperty(screenId)) {
    const navItems = document.querySelectorAll('.bottom-nav .nav-item');
    if (navItems[navMap[screenId]]) {
      navItems[navMap[screenId]].classList.add('active');
    }
  }
}

function showSectionLevels(sectionId) {
  const section = appData.sections.find(s => s.id === sectionId);
  if (!section) return;
  
  const sectionTitle = document.getElementById('section-title');
  const levelsContainer = document.getElementById('levels-container');
  
  if (sectionTitle) {
    sectionTitle.textContent = section.name;
  }
  
  if (levelsContainer) {
    levelsContainer.innerHTML = '';
    
    section.levels.forEach((level, index) => {
      const isCompleted = currentUser.completedLevels[`${sectionId}_${level.id}`];
      const isLocked = index > 0 && !currentUser.completedLevels[`${sectionId}_${section.levels[index-1].id}`];
      
      const levelCard = document.createElement('div');
      levelCard.className = `level-card ${isCompleted ? 'completed' : ''} ${isLocked ? 'locked' : ''}`;
      
      let statusIcon = '🔒';
      if (!isLocked) {
        statusIcon = isCompleted ? '✅' : '▶️';
      }
      
      levelCard.innerHTML = `
        <div class="level-header">
          <div class="level-number">${level.id}</div>
          <div class="level-status">${statusIcon}</div>
        </div>
        <h4 class="level-title">${level.name}</h4>
        <p class="level-concept">${level.concept}</p>
      `;
      
      if (!isLocked) {
        levelCard.addEventListener('click', () => startLesson(sectionId, level.id));
      }
      
      levelsContainer.appendChild(levelCard);
    });
  }
  
  showScreen('section-levels');
}

function startLesson(sectionId, levelId) {
  const section = appData.sections.find(s => s.id === sectionId);
  const level = section.levels.find(l => l.id === levelId);
  
  if (!section || !level) return;
  
  // Setup lesson
  document.getElementById('lesson-title').textContent = level.name;
  document.getElementById('concept-title').textContent = level.name;
  document.getElementById('concept-explanation').textContent = level.explanation;
  
  // Setup examples
  const examplesList = document.getElementById('examples-list');
  examplesList.innerHTML = '';
  level.examples.forEach(example => {
    const exampleItem = document.createElement('div');
    exampleItem.className = 'example-item';
    exampleItem.textContent = example;
    examplesList.appendChild(exampleItem);
  });
  
  // Setup back button
  document.getElementById('lesson-back-btn').onclick = () => showSectionLevels(sectionId);
  
  // Store current quiz data
  currentQuiz.section = sectionId;
  currentQuiz.levelId = levelId;
  currentQuiz.questions = [...level.quiz];
  currentQuiz.currentQuestion = 0;
  currentQuiz.answers = [];
  currentQuiz.score = 0;
  
  // Show lesson screen
  document.getElementById('explanation-phase').classList.remove('hidden');
  document.getElementById('quiz-phase').classList.add('hidden');
  document.getElementById('results-phase').classList.add('hidden');
  
  showScreen('lesson');
}

function startQuiz() {
  document.getElementById('explanation-phase').classList.add('hidden');
  document.getElementById('quiz-phase').classList.remove('hidden');
  document.getElementById('results-phase').classList.add('hidden');
  
  currentQuiz.currentQuestion = 0;
  currentQuiz.answers = [];
  currentQuiz.score = 0;
  
  showQuestion();
}

function showQuestion() {
  const question = currentQuiz.questions[currentQuiz.currentQuestion];
  const questionCounter = document.getElementById('question-counter');
  const questionText = document.getElementById('question-text');
  const questionOptions = document.getElementById('question-options');
  const quizProgressFill = document.querySelector('.quiz-progress-fill');
  
  // Update counter and progress
  questionCounter.textContent = `Question ${currentQuiz.currentQuestion + 1} of ${currentQuiz.questions.length}`;
  const progressPercent = ((currentQuiz.currentQuestion + 1) / currentQuiz.questions.length) * 100;
  quizProgressFill.style.width = `${progressPercent}%`;
  
  // Update question
  questionText.textContent = question.question;
  
  // Update options
  questionOptions.innerHTML = '';
  question.options.forEach((option, index) => {
    const optionBtn = document.createElement('button');
    optionBtn.className = 'option-btn';
    optionBtn.textContent = option;
    optionBtn.onclick = () => selectAnswer(index);
    questionOptions.appendChild(optionBtn);
  });
  
  // Hide feedback
  document.getElementById('quiz-feedback').classList.add('hidden');
}

function selectAnswer(selectedIndex) {
  const question = currentQuiz.questions[currentQuiz.currentQuestion];
  const isCorrect = selectedIndex === question.correct;
  
  // Store answer
  currentQuiz.answers[currentQuiz.currentQuestion] = {
    selected: selectedIndex,
    correct: question.correct,
    isCorrect: isCorrect
  };
  
  if (isCorrect) {
    currentQuiz.score++;
  }
  
  // Update option buttons
  const optionBtns = document.querySelectorAll('.option-btn');
  optionBtns.forEach((btn, index) => {
    btn.disabled = true;
    if (index === question.correct) {
      btn.classList.add('correct');
    } else if (index === selectedIndex && !isCorrect) {
      btn.classList.add('incorrect');
    }
  });
  
  // Show feedback
  showQuizFeedback(isCorrect);
}

function showQuizFeedback(isCorrect) {
  const feedback = document.getElementById('quiz-feedback');
  const feedbackIcon = feedback.querySelector('.feedback-icon');
  const feedbackText = feedback.querySelector('.feedback-text');
  
  if (isCorrect) {
    feedbackIcon.textContent = '🎉';
    feedbackText.textContent = 'Correct! Well done!';
  } else {
    feedbackIcon.textContent = '🤔';
    feedbackText.textContent = 'Not quite right, but keep trying!';
  }
  
  feedback.classList.remove('hidden');
}

function nextQuestion() {
  currentQuiz.currentQuestion++;
  
  if (currentQuiz.currentQuestion < currentQuiz.questions.length) {
    showQuestion();
  } else {
    showResults();
  }
}

function showResults() {
  document.getElementById('quiz-phase').classList.add('hidden');
  document.getElementById('results-phase').classList.remove('hidden');
  
  // Calculate results
  const score = currentQuiz.score;
  const total = currentQuiz.questions.length;
  const accuracy = Math.round((score / total) * 100);
  const pointsEarned = score * 10;
  
  // Update user data
  currentUser.points += pointsEarned;
  currentUser.level = Math.floor(currentUser.points / 100) + 1;
  
  // Mark level as completed if perfect score
  if (score === total) {
    currentUser.completedLevels[`${currentQuiz.section}_${currentQuiz.levelId}`] = true;
    currentUser.perfectQuizzes++;
  }
  
  // Check for new badges
  const newBadges = checkForNewBadges();
  
  // Update streak
  updateStreak();
  
  // Save data
  saveUserData();
  
  // Update results display
  document.getElementById('final-score').textContent = score;
  document.getElementById('points-earned').textContent = pointsEarned;
  document.getElementById('accuracy-percent').textContent = `${accuracy}%`;
  
  // Show new badges
  const newBadgesContainer = document.getElementById('new-badges-container');
  if (newBadges.length > 0) {
    newBadgesContainer.innerHTML = '<h4>🎉 New Badges Earned!</h4>';
    newBadges.forEach(badge => {
      const badgeElement = document.createElement('div');
      badgeElement.className = 'badge-item earned bounce';
      badgeElement.innerHTML = `
        <span class="badge-icon">${badge.icon}</span>
        <span class="badge-name">${badge.name}</span>
      `;
      newBadgesContainer.appendChild(badgeElement);
    });
  } else {
    newBadgesContainer.innerHTML = '';
  }
  
  // Update UI
  updateUI();
}

function checkForNewBadges() {
  const newBadges = [];
  
  // First lesson badge
  if (!currentUser.earnedBadges.includes('first_lesson') && 
      Object.keys(currentUser.completedLevels).length === 1) {
    newBadges.push(appData.badges.find(b => b.id === 'first_lesson'));
    currentUser.earnedBadges.push('first_lesson');
  }
  
  // Perfectionist badge
  if (!currentUser.earnedBadges.includes('perfectionist') && 
      currentQuiz.score === currentQuiz.questions.length) {
    newBadges.push(appData.badges.find(b => b.id === 'perfectionist'));
    currentUser.earnedBadges.push('perfectionist');
  }
  
  // Quiz champion badge
  if (!currentUser.earnedBadges.includes('quiz_champion') && 
      currentUser.perfectQuizzes >= 10) {
    newBadges.push(appData.badges.find(b => b.id === 'quiz_champion'));
    currentUser.earnedBadges.push('quiz_champion');
  }
  
  // Section master badges
  appData.sections.forEach(section => {
    const badgeId = section.id === 'arithmetic' ? 'arithmetic_master' : 
                   section.id === 'algebra' ? 'algebra_hero' : 'trig_expert';
    
    if (!currentUser.earnedBadges.includes(badgeId)) {
      const completedInSection = Object.keys(currentUser.completedLevels)
        .filter(key => key.startsWith(section.id)).length;
      
      if (completedInSection === section.levels.length) {
        newBadges.push(appData.badges.find(b => b.id === badgeId));
        currentUser.earnedBadges.push(badgeId);
      }
    }
  });
  
  return newBadges;
}

function updateStreak() {
  const today = new Date().toDateString();
  const lastStudy = currentUser.lastStudyDate;
  
  if (lastStudy === today) {
    // Already studied today, no change to streak
    return;
  }
  
  if (lastStudy) {
    const lastDate = new Date(lastStudy);
    const todayDate = new Date(today);
    const diffTime = todayDate - lastDate;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) {
      // Consecutive day
      currentUser.streak++;
    } else {
      // Streak broken
      currentUser.streak = 1;
    }
  } else {
    // First time studying
    currentUser.streak = 1;
  }
  
  currentUser.lastStudyDate = today;
  
  // Check for streak master badge
  if (!currentUser.earnedBadges.includes('streak_master') && currentUser.streak >= 7) {
    currentUser.earnedBadges.push('streak_master');
  }
}

function retryLesson() {
  startQuiz();
}

function continueToNext() {
  const section = appData.sections.find(s => s.id === currentQuiz.section);
  const currentLevelIndex = section.levels.findIndex(l => l.id === currentQuiz.levelId);
  
  if (currentLevelIndex < section.levels.length - 1) {
    // Go to next level in same section
    const nextLevel = section.levels[currentLevelIndex + 1];
    startLesson(currentQuiz.section, nextLevel.id);
  } else {
    // Go back to section selection
    showSectionLevels(currentQuiz.section);
  }
}

// Initialize the app when the page loads
window.addEventListener('load', function() {
  // Additional initialization if needed
  console.log('MathQuest app initialized!');
});