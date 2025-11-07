    // Career Wizard Chatbot Implementation
    (function() {
        'use strict';

        // Conversation state
        const state = {
            stage: 'greeting',
            userData: {
                name: '',
                role: '',
                tasks: [],
                favouriteTask: '',
                interests: [],
                goals: [],
                preferences: [],
                skills: [],
                tools: [],
                progressionInterest: '',
                nextLevel: '',
                learningInterests: [],
                employerSupport: '',
                helpNeeded: [],
                readinessChecklist: {},
                conversationHistory: []
            }
        };

        // DOM elements
        const chatMessages = document.getElementById('chatMessages');
        const chatInput = document.getElementById('chatInput');
        const sendBtn = document.getElementById('sendBtn');
        const contextPanel = document.getElementById('panelContent');
        const mapTrigger = document.getElementById('mapTrigger');
        const careerMapOverlay = document.getElementById('careerMapOverlay');
        const closeMapBtn = document.getElementById('closeMapBtn');

        // Initialize chatbot
        function init() {
            sendBtn.addEventListener('click', handleSend);
            chatInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') handleSend();
            });

            // Map overlay controls
            mapTrigger.addEventListener('click', () => {
                careerMapOverlay.classList.add('active');
            });

            closeMapBtn.addEventListener('click', () => {
                careerMapOverlay.classList.remove('active');
            });

            careerMapOverlay.addEventListener('click', (e) => {
                if (e.target === careerMapOverlay) {
                    careerMapOverlay.classList.remove('active');
                }
            });

            // Start conversation
            setTimeout(() => startConversation(), 500);
        }

        // Add message to chat
        function addMessage(text, isUser = false, options = null) {
            const messageDiv = document.createElement('div');
            messageDiv.className = 'message ' + (isUser ? 'user-message' : 'bot-message');
            messageDiv.innerHTML = text;

            chatMessages.appendChild(messageDiv);

            // Add quick reply buttons if provided
            if (options && options.length > 0) {
                const repliesDiv = document.createElement('div');
                repliesDiv.className = 'quick-replies';

                options.forEach(option => {
                    const btn = document.createElement('button');
                    btn.className = 'quick-reply-btn';
                    btn.textContent = option.label || option;
                    btn.onclick = () => handleQuickReply(option.value || option, option.label || option);
                    repliesDiv.appendChild(btn);
                });

                chatMessages.appendChild(repliesDiv);
            }

            scrollToBottom();
        }

        // Scroll chat to bottom
        function scrollToBottom() {
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }

        // Handle send button
        function handleSend() {
            const message = chatInput.value.trim();
            if (!message) return;

            addMessage(message, true);
            chatInput.value = '';

            processUserInput(message);
        }

        // Handle quick reply
        function handleQuickReply(value, label) {
            addMessage(label, true);
            processUserInput(value);
        }

        // Start the conversation
        function startConversation() {
            addMessage('👋 Hello! Welcome to The Apprentice Academy Career Progression Wizard!');
            setTimeout(() => {
                addMessage('I am here to help you explore your career development opportunities within our organization. Lets start by getting to know you better.');
                setTimeout(() => {
                    addMessage('What is your name?');
                    enableInput();
                }, 1000);
            }, 1000);
        }

        // Enable/disable input
        function enableInput() {
            chatInput.disabled = false;
            sendBtn.disabled = false;
            chatInput.focus();
        }

        function disableInput() {
            chatInput.disabled = true;
            sendBtn.disabled = true;
        }

        // Process user input based on current stage
        function processUserInput(input) {
            disableInput();

            switch(state.stage) {
                case 'greeting':
                    state.userData.name = input;
                    state.stage = 'role';
                    setTimeout(() => askRole(), 800);
                    break;

                case 'role':
                    state.userData.role = input;
                    state.stage = 'tasks';
                    setTimeout(() => askTasks(), 800);
                    break;

                case 'tasks':
                    state.userData.tasks = parseListInput(input);
                    state.stage = 'favouriteTask';
                    setTimeout(() => askFavouriteTask(), 800);
                    break;

                case 'favouriteTask':
                    state.userData.favouriteTask = input;
                    state.stage = 'interests';
                    setTimeout(() => askInterests(), 800);
                    break;

                case 'interests':
                    state.userData.interests = parseListInput(input);
                    state.stage = 'goals';
                    setTimeout(() => askGoals(), 800);
                    break;

                case 'goals':
                    state.userData.goals = parseListInput(input);
                    state.stage = 'preferences';
                    setTimeout(() => askPreferences(), 800);
                    break;

                case 'preferences':
                    state.userData.preferences = parseListInput(input);
                    state.stage = 'skills';
                    setTimeout(() => askSkills(), 800);
                    break;

                case 'skills':
                    state.userData.skills = parseListInput(input);
                    state.stage = 'tools';
                    setTimeout(() => askTools(), 800);
                    break;

                case 'tools':
                    state.userData.tools = parseListInput(input);
                    state.stage = 'progression';
                    setTimeout(() => askProgressionInterest(), 800);
                    break;

                case 'progression':
                    state.userData.progressionInterest = input;
                    if (input.toLowerCase().includes('yes') || input.toLowerCase().includes('interested')) {
                        state.stage = 'nextLevel';
                        setTimeout(() => askNextLevel(), 800);
                    } else {
                        state.stage = 'learning';
                        setTimeout(() => askLearningInterests(), 800);
                    }
                    break;

                case 'nextLevel':
                    state.userData.nextLevel = input;
                    state.stage = 'learning';
                    setTimeout(() => askLearningInterests(), 800);
                    break;

                case 'learning':
                    state.userData.learningInterests = parseListInput(input);
                    state.stage = 'support';
                    setTimeout(() => askEmployerSupport(), 800);
                    break;

                case 'support':
                    state.userData.employerSupport = input;
                    state.stage = 'help';
                    setTimeout(() => askHelpNeeded(), 800);
                    break;

                case 'help':
                    state.userData.helpNeeded = parseListInput(input);
                    // Check if readiness checklist is needed
                    if (state.userData.progressionInterest.toLowerCase().includes('yes')) {
                        state.stage = 'readiness';
                        setTimeout(() => askReadinessChecklist(), 800);
                    } else {
                        state.stage = 'summary';
                        setTimeout(() => showSummary(), 800);
                    }
                    break;

                case 'readiness':
                    state.userData.readinessChecklist = parseReadinessInput(input);
                    state.stage = 'summary';
                    setTimeout(() => showSummary(), 800);
                    break;
            }

            updateContextPanel();
        }

        // Stage-specific question functions
        function askRole() {
            addMessage('Great to meet you, ' + state.userData.name + '! 😊');
            setTimeout(() => {
                addMessage('What is your current role?', false, [
                    { label: 'Accountancy Level 2', value: 'Accountancy Level 2' },
                    { label: 'Business Admin Level 3', value: 'Business Admin Level 3' },
                    { label: 'Data Technician Level 3', value: 'Data Technician Level 3' },
                    { label: 'Other', value: 'other' }
                ]);
            }, 600);
        }

        function askTasks() {
            addMessage('Excellent! As a ' + state.userData.role + ', you must have a variety of responsibilities.');
            setTimeout(() => {
                addMessage('What are the main tasks you perform in your current role? (You can list multiple tasks separated by commas)');
                enableInput();
            }, 800);
        }

        function askFavouriteTask() {
            addMessage('Thanks for sharing! 📝');
            setTimeout(() => {
                addMessage('Out of all those tasks, which one do you enjoy the most and why?');
                enableInput();
            }, 800);
        }

        function askInterests() {
            addMessage('That is wonderful to hear! 🌟');
            setTimeout(() => {
                addMessage('What areas of work are you most interested in exploring? (e.g., management, technical, customer-facing, etc.)');
                enableInput();
            }, 800);
        }

        function askGoals() {
            addMessage('Great choices! Let us talk about your aspirations.');
            setTimeout(() => {
                addMessage('What are your career goals for the next 2-3 years?');
                enableInput();
            }, 800);
        }

        function askPreferences() {
            addMessage('Those are ambitious and achievable goals! 🎯');
            setTimeout(() => {
                addMessage('What type of work environment do you prefer? (e.g., collaborative, independent, fast-paced, structured)');
                enableInput();
            }, 800);
        }

        function askSkills() {
            addMessage('Understanding your work style helps us find the perfect fit! 💼');
            setTimeout(() => {
                addMessage('What are your strongest skills? List up to 5 skills that you excel at.');
                enableInput();
            }, 800);
        }

        function askTools() {
            addMessage('Impressive skill set! 💪');
            setTimeout(() => {
                addMessage('What tools, software, or systems are you proficient with?');
                enableInput();
            }, 800);
        }

        function askProgressionInterest() {
            addMessage('Your technical proficiency is valuable! 🔧');
            setTimeout(() => {
                addMessage('Are you interested in moving to a higher level in your current career path?', false, [
                    { label: 'Yes, definitely!', value: 'yes' },
                    { label: 'Maybe, I am exploring options', value: 'maybe' },
                    { label: 'No, I am happy where I am', value: 'no' }
                ]);
            }, 800);
        }

        function askNextLevel() {
            addMessage('Fantastic! Let us explore your progression options. 🚀');
            setTimeout(() => {
                addMessage('What level or role are you aiming for next?');
                enableInput();
            }, 800);
        }

        function askLearningInterests() {
            addMessage('Continuous learning is key to career success! 📚');
            setTimeout(() => {
                addMessage('What new skills or knowledge areas would you like to develop?');
                enableInput();
            }, 800);
        }

        function askEmployerSupport() {
            addMessage('Investing in your development will open many doors! 🔓');
            setTimeout(() => {
                addMessage('How does your employer currently support your career development?');
                enableInput();
            }, 800);
        }

        function askHelpNeeded() {
            addMessage('That is great to know what support is already in place! 🤝');
            setTimeout(() => {
                addMessage('What additional help or resources would be most valuable to you right now?');
                enableInput();
            }, 800);
        }

        function askReadinessChecklist() {
            addMessage('Let us assess your readiness for the next step! ✅');
            setTimeout(() => {
                const checklistHTML = '<div class="form-container">' +
                    '<h3>Readiness Checklist</h3>' +
                    '<p style="margin-bottom: 1rem;">Please indicate your level of preparedness:</p>' +
                    '<div class="checkbox-group">' +
                        '<div class="checkbox-item">' +
                            '<input type="checkbox" id="ready-skills" name="readiness" value="skills">' +
                            '<label for="ready-skills">I have the required skills</label>' +
                        '</div>' +
                        '<div class="checkbox-item">' +
                            '<input type="checkbox" id="ready-experience" name="readiness" value="experience">' +
                            '<label for="ready-experience">I have relevant experience</label>' +
                        '</div>' +
                        '<div class="checkbox-item">' +
                            '<input type="checkbox" id="ready-qualifications" name="readiness" value="qualifications">' +
                            '<label for="ready-qualifications">I have or am working toward qualifications</label>' +
                        '</div>' +
                        '<div class="checkbox-item">' +
                            '<input type="checkbox" id="ready-confidence" name="readiness" value="confidence">' +
                            '<label for="ready-confidence">I feel confident to take the next step</label>' +
                        '</div>' +
                        '<div class="checkbox-item">' +
                            '<input type="checkbox" id="ready-support" name="readiness" value="support">' +
                            '<label for="ready-support">I have support from my manager</label>' +
                        '</div>' +
                    '</div>' +
                    '<button class="submit-btn" onclick="submitReadiness()">Submit</button>' +
                '</div>';

                const tempDiv = document.createElement('div');
                tempDiv.className = 'message bot-message';
                tempDiv.innerHTML = checklistHTML;
                chatMessages.appendChild(tempDiv);
                scrollToBottom();
            }, 800);
        }

        // Make submit function global so it can be called from HTML
        window.submitReadiness = function() {
            const checkboxes = document.querySelectorAll('input[name="readiness"]:checked');
            const values = Array.from(checkboxes).map(cb => cb.value);

            if (values.length === 0) {
                alert('Please select at least one item.');
                return;
            }

            const summary = values.join(', ');
            addMessage('Selected: ' + summary, true);
            processUserInput(summary);
        };

        function showSummary() {
            addMessage('🎉 Thank you for completing the Career Progression Wizard!');

            setTimeout(() => {
                let summaryHTML = '<div class="form-container">' +
                    '<h3>📋 Your Career Profile Summary</h3>' +
                    '<br>' +
                    '<p><strong>Name:</strong> ' + state.userData.name + '</p>' +
                    '<p><strong>Current Role:</strong> ' + state.userData.role + '</p>' +
                    '<br>' +
                    '<p><strong>Main Tasks:</strong></p>' +
                    '<ul class="summary-list">';

                state.userData.tasks.forEach(task => {
                    summaryHTML += '<li>' + task + '</li>';
                });

                summaryHTML += '</ul><br>' +
                    '<p><strong>Favourite Task:</strong> ' + state.userData.favouriteTask + '</p>' +
                    '<br>' +
                    '<p><strong>Career Interests:</strong></p>' +
                    '<ul class="summary-list">';

                state.userData.interests.forEach(interest => {
                    summaryHTML += '<li>' + interest + '</li>';
                });

                summaryHTML += '</ul><br>' +
                    '<p><strong>Career Goals:</strong></p>' +
                    '<ul class="summary-list">';

                state.userData.goals.forEach(goal => {
                    summaryHTML += '<li>' + goal + '</li>';
                });

                summaryHTML += '</ul><br>' +
                    '<p><strong>Key Skills:</strong></p>' +
                    '<div>';

                state.userData.skills.forEach(skill => {
                    summaryHTML += '<span class="skill-badge">' + skill + '</span>';
                });

                summaryHTML += '</div><br>' +
                    '<p><strong>Tools & Systems:</strong></p>' +
                    '<div>';

                state.userData.tools.forEach(tool => {
                    summaryHTML += '<span class="skill-badge">' + tool + '</span>';
                });

                summaryHTML += '</div><br>' +
                    '<p><strong>Learning Interests:</strong></p>' +
                    '<ul class="summary-list">';

                state.userData.learningInterests.forEach(interest => {
                    summaryHTML += '<li>' + interest + '</li>';
                });

                summaryHTML += '</ul><br>' +
                    '<p><strong>Help Needed:</strong></p>' +
                    '<ul class="summary-list">';

                state.userData.helpNeeded.forEach(help => {
                    summaryHTML += '<li>' + help + '</li>';
                });

                summaryHTML += '</ul></div>';

                const tempDiv = document.createElement('div');
                tempDiv.className = 'message bot-message';
                tempDiv.innerHTML = summaryHTML;
                chatMessages.appendChild(tempDiv);
                scrollToBottom();

                setTimeout(() => {
                    addMessage('🗺️ Do not forget to explore our interactive Career Map to see all the progression pathways available to you! Click the "View Career Map" button in the bottom right corner.');
                    setTimeout(() => {
                        addMessage('Would you like to start over or explore different career options?', false, [
                            { label: '🔄 Start Over', value: 'restart' },
                            { label: '🗺️ View Career Map', value: 'map' }
                        ]);

                        // Override quick reply handler for final choices
                        window.handleQuickReply = function(value) {
                            if (value === 'restart') {
                                location.reload();
                            } else if (value === 'map') {
                                careerMapOverlay.classList.add('active');
                            }
                        };
                    }, 1500);
                }, 1000);
            }, 1000);
        }

        // Helper function to parse list input
        function parseListInput(input) {
            return input.split(',').map(item => item.trim()).filter(item => item.length > 0);
        }

        // Helper function to parse readiness checklist input
        function parseReadinessInput(input) {
            const items = parseListInput(input);
            const checklist = {};
            items.forEach(item => {
                checklist[item] = true;
            });
            return checklist;
        }

        // Update context panel with current information
        function updateContextPanel() {
            let contextHTML = '<h2>Your Progress</h2>';

            if (state.userData.name) {
                contextHTML += '<p><strong>Name:</strong> ' + state.userData.name + '</p>';
            }
            if (state.userData.role) {
                contextHTML += '<p><strong>Role:</strong> ' + state.userData.role + '</p>';
            }

            contextHTML += '<br><div class="three-cs-info">';

            // Confidence card
            contextHTML += '<div class="c-card confidence">' +
                '<h3>💪 Confidence</h3>';
            if (state.userData.favouriteTask) {
                contextHTML += '<p>Enjoys: ' + state.userData.favouriteTask + '</p>';
            } else {
                contextHTML += '<p>Building self-assurance in career choices</p>';
            }
            contextHTML += '</div>';

            // Competence card
            contextHTML += '<div class="c-card competence">' +
                '<h3>🎯 Competence</h3>';
            if (state.userData.skills.length > 0) {
                contextHTML += '<p>Skills: ' + state.userData.skills.slice(0, 3).join(', ') + '</p>';
            } else {
                contextHTML += '<p>Developing skills and expertise</p>';
            }
            contextHTML += '</div>';

            // Career card
            contextHTML += '<div class="c-card career">' +
                '<h3>🚀 Career Capability</h3>';
            if (state.userData.goals.length > 0) {
                contextHTML += '<p>Goal: ' + state.userData.goals[0] + '</p>';
            } else {
                contextHTML += '<p>Creating clear career pathways</p>';
            }
            contextHTML += '</div>';

            contextHTML += '</div>';

            contextPanel.innerHTML = contextHTML;
        }

        // Initialize on page load
        init();
    })();

    // Career Map Panel Management
    (function() {
        'use strict';

        const careerMapPanel = document.getElementById('careerMapPanel');
        const careerMapContent = document.getElementById('careerMapContent');
        const fullscreenBtn = document.getElementById('fullscreenBtn');
        const careerMapSVG = document.getElementById('CareerMapSVG');

        // Move the SVG from overlay to the new panel on page load
        if (careerMapSVG && careerMapContent) {
            careerMapContent.appendChild(careerMapSVG);
        }

        // Fullscreen toggle functionality
        if (fullscreenBtn) {
            fullscreenBtn.addEventListener('click', function() {
                if (careerMapPanel.classList.contains('fullscreen')) {
                    careerMapPanel.classList.remove('fullscreen');
                    fullscreenBtn.textContent = '⛶ Fullscreen';
                } else {
                    careerMapPanel.classList.add('fullscreen');
                    fullscreenBtn.textContent = '✕ Exit Fullscreen';
                }
            });
        }

        // Load Career Map SVG
        function loadCareerMap() {
            const careerMapContent = document.getElementById('careerMapContent');
            if (careerMapContent) {
                fetch('career-map.svg')
                    .then(response => response.text())
                    .then(svgContent => {
                        careerMapContent.innerHTML = svgContent;
                    })
                    .catch(error => console.error('Error loading career map:', error));
            }
        }

        // Load SVG on page load
        loadCareerMap();
    })();
