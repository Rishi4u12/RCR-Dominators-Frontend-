---
layout: base
title: Home page of the project
permalink: /railroad/home
---


<style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
        }

        body {
            background-color: #000000;   /* aged paper tone, nostalgic railroad feel */
            color: #2c2b28;
            line-height: 1.5;
            display: flex;
            flex-direction: column;
            min-height: 100vh;
        }

        /* common nav bar style */
        .nav-bar {
            background-color: #3b4b3b;       /* deep olive green, reminiscent of carriage seats */
            padding: 0.9rem 2rem;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 1.8rem 2.5rem;
            border-bottom: 4px solid #b87c4b; /* rusty bronze, like railroad fittings */
            border-top: 4px solid #b87c4b;
            box-shadow: 0 2px 10px rgba(0,0,0,0.15);
        }

        .nav-bar a {
            color: #ceaa6b;
            text-decoration: none;
            font-weight: 600;
            letter-spacing: 0.5px;
            padding: 0.4rem 0.2rem;
            font-size: 1.1rem;
            text-transform: uppercase;
            border-bottom: 2px solid transparent;
            transition: 0.2s;
        }

        .nav-bar a:hover {
            border-bottom-color: #3d2205;
            color: #b58630;
            transform: translateY(-1px);
        }

        /* bottom nav slightly different, subtle top border */
        .bottom-nav {
            border-top: 4px solid #b87c4b;
            border-bottom: none;
            margin-top: 2rem;
            background-color: #2f3e2f;
        }

        .container {
            max-width: 1100px;
            margin: 0 auto;
            padding: 2rem 1.5rem;
            flex: 1;
            width: 100%;
        }

        /* main introduction area */
        .intro-card {
            background: #000000d9;
            backdrop-filter: blur(2px);
            padding: 2rem 2.2rem;
            border-radius: 24px 8px 24px 8px;  /* slightly railroad sign style */
            box-shadow: 8px 8px 0 #3b4b3b, 0 4px 15px rgba(0,0,0,0.1);
            border: 2px solid #9e6a3e;
            margin-bottom: 2.8rem;
        }

        .intro-card h1 {
            font-size: 2.8rem;
            color: #2d3e2d;
            text-transform: uppercase;
            letter-spacing: 2px;
            border-left: 10px solid #b87c4b;
            padding-left: 1.2rem;
            margin-bottom: 1rem;
            line-height: 1.2;
        }

        .intro-card p {
            font-size: 1.2rem;
            color: #2f2e2a;
            max-width: 800px;
            margin-top: 0.8rem;
            font-weight: 400;
        }

        .intro-highlight {
            background: #3b4b3b;
            color: #816738;
            display: inline-block;
            padding: 0.3rem 1.2rem;
            border-radius: 30px;
            font-weight: 600;
            font-size: 1rem;
            letter-spacing: 0.5px;
            margin: 1rem 0 0.5rem 0;
            border: 1px solid #c29a6b;
        }

        /* news grid */
        .section-title {
            font-size: 2.2rem;
            font-weight: 700;
            color: #1f3a1f;
            margin: 2.5rem 0 1.2rem 0;
            border-bottom: 3px dashed #b87c4b;
            padding-bottom: 0.5rem;
            display: inline-block;
        }

        .news-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 2rem;
            margin: 2rem 0 3rem;
        }

        .news-card {
            background: #fefcf5;
            border-radius: 12px 4px 12px 4px;
            border: 2px solid #6b4f32;
            padding: 1.5rem;
            box-shadow: 5px 5px 0 #3b4b3b;
            transition: 0.15s;
        }

        .news-card:hover {
            transform: translate(-3px, -3px);
            box-shadow: 8px 8px 0 #3b4b3b;
        }

        .news-date {
            color: #9e6a3e;
            font-weight: 700;
            font-size: 0.9rem;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        .news-card h3 {
            font-size: 1.5rem;
            margin: 0.5rem 0 0.8rem 0;
            color: #2c472c;
        }

        .news-card p {
            color: #3d3b35;
            margin-bottom: 1rem;
        }

        .news-tag {
            background: #d9c6aa;
            padding: 0.2rem 1rem;
            border-radius: 20px;
            font-size: 0.8rem;
            font-weight: 600;
            color: #2b412b;
            display: inline-block;
        }

        /* contact us section */
        .contact-section {
            background: #2f3e2f;
            border: 3px solid #b87c4b;
            border-radius: 40px 8px 40px 8px;
            padding: 2rem 2.5rem;
            margin: 3rem 0 1.5rem;
            color: #f3e2cd;
            box-shadow: 6px 6px 0 #1d2c1d;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            align-items: center;
        }

        .contact-section h2 {
            font-size: 2rem;
            font-weight: 600;
            border-left: 8px solid #f4c28b;
            padding-left: 1rem;
        }

        .contact-info p {
            font-size: 1.2rem;
            margin: 0.5rem 0;
        }

        .contact-info i { /* fake icon using text */
            background: #b87c4b;
            font-style: normal;
            padding: 0.2rem 0.7rem;
            border-radius: 50px;
            color: #1f2e1f;
            font-weight: bold;
            margin-right: 0.5rem;
            display: inline-block;
        }

        .contact-btn {
            background: #e3c184;
            color: #1d331d;
            text-decoration: none;
            font-weight: 700;
            padding: 1rem 2.2rem;
            border-radius: 40px 8px 40px 8px;
            font-size: 1.3rem;
            border: 2px solid #ffe1a8;
            transition: 0.2s;
            box-shadow: 3px 3px 0 #1b2a1b;
            white-space: nowrap;
        }

        .contact-btn:hover {
            background: #f5d79c;
            box-shadow: 5px 5px 0 #1b2a1b;
            transform: scale(1.02);
        }

        /* small footer note */
        .copyright {
            text-align: center;
            margin-top: 2rem;
            color: #5b5a53;
            font-size: 0.95rem;
            border-top: 1px dashed #b4a386;
            padding-top: 1.5rem;
        }

        /* active state for current page (home) */
        .nav-bar a.active {
            border-bottom-color: #f4c28b;
            color: #452d00;
            font-weight: 700;
        }

        /* make sure everything fits mobile */
        @media (max-width: 700px) {
            .nav-bar {
                gap: 1rem;
                padding: 0.7rem 1rem;
            }
            .nav-bar a {
                font-size: 0.9rem;
            }
            .intro-card h1 {
                font-size: 2.2rem;
            }
            .contact-section {
                flex-direction: column;
                text-align: center;
                gap: 1.5rem;
            }
        }
    </style>

<body>
    <!-- TOP navigation bar with required buttons (Home, schedule, About trains, membership, About Us) -->
    <div class="nav-bar">
        <a href="#" class="active">Home</a>
        <a href="/railroad/schedule">Schedule</a>
        <a href="#">Live camera</a>
        <a href="#">Membership</a>
        <a href="#">About Us</a>
    </div>

    <main class="container">
        <!-- Introduction of the train website (hero/intro) -->
        <div class="intro-card">
            <span class="intro-highlight">⚡ since 1957 · heritage rail ⚡</span>
            <h1>Poway Midland Railroad</h1>
            <p>Welcome to the official digital depot — your portal to steam, steel, and stories. 
            Our website brings together train enthusiasts, history buffs, and families who love the magic of railroads. 
            Explore vintage locomotives, real-time schedules, membership benefits, and the people who keep the iron horse alive.</p>
            <p style="margin-top: 0.8rem;">🚂 <strong>Introduction:</strong> The Poway Midland Railroad is a volunteer-based, operating heritage railway in San Diego County. We restore and run historic trains, offer public rides, and preserve railroad craftsmanship. This site is your ticket behind the scenes.</p>
        </div>

        <!-- Recent news section -->
        <h2 class="section-title">📰 Recent news from the line</h2>
        <div class="news-grid">
            <div class="news-card">
                <span class="news-date">📆 March 10, 2026</span>
                <h3>Excursion 1225 returns</h3>
                <p>After a careful overhaul, our beloved steam locomotive #1225 steams back into service. First public run: April 3rd – celebrate with us!</p>
                <span class="news-tag">steam · event</span>
            </div>
            <div class="news-card">
                <span class="news-date">📆 February 28, 2026</span>
                <h3>New membership tier</h3>
                <p>Introducing the "Golden Spike" membership: exclusive cab rides, workshop access, and a engraved spike. Join the rolling community.</p>
                <span class="news-tag">membership</span>
            </div>
            <div class="news-card">
                <span class="news-date">📆 February 12, 2026</span>
                <h3>Depot restoration begins</h3>
                <p>The 1890s Midland depot is getting a faithful renovation. Help us document the process – volunteer carpenters needed.</p>
                <span class="news-tag">preservation</span>
            </div>
        </div>

        <!-- Contact Us section (prominent) -->
        <div class="contact-section">
            <div>
                <h2>🚉 Contact Us</h2>
                <div class="contact-info">
                    <p><i>📞</i> (858) 555-RAIL (7245)</p>
                    <p><i>📧</i> depot@powaymidland.org</p>
                    <p><i>📍</i> 14134 Midland Rd, Poway, CA 92064</p>
                </div>
            </div>
            <a href="#" class="contact-btn">Send a wire →</a>
        </div>

        <!-- small note: the page is only home, but we already have all required elements -->
        <p style="text-align: center; color: #5f5b51; margin: 1rem 0 2rem;">—  All aboard for a journey through rail heritage  —</p>
    </main>

    <!-- BOTTOM navigation bar, exactly the same buttons: Home, schedule, About trains, membership, About Us -->
    <div class="nav-bar bottom-nav">
        <a href="#" class="active">Home</a>
        <a href="/railroad/schedule">Schedule</a>
        <a href="#">Live camera</a>
        <a href="#">Membership</a>
        <a href="#">About Us</a>
    </div>

    <!-- optional footer with copyright (no extra nav) -->
    <div class="copyright">
        © 2026 Poway Midland Railroad. All rights reserved. 
        <!-- keeping contact hint consistent: we already have full contact above -->
    </div>
</body>