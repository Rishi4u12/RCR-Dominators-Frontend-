---
layout: base
title: Home page of the project
permalink: /railroad/home
---

<style>
  :root {
    --rust:    #b94a1c;
    --ember:   #e8621a;
    --gold:    #c9943a;
    --coal:    #1a1410;
    --iron:    #2e2620;
    --iron2:   #3a2e28;
    --steam:   #e8e0d0;
    --smoke:   #8c7f6e;
    --green:   #2d6a4f;
    --rail:    #4a3f35;
  }


        /* 火车背景组件样式 - 纯背景，不干扰页面内容 */
        .moving-train-background {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 0;
            overflow: hidden;
            pointer-events: none;  /* 让背景不干扰点击交互 */
        }

        /* 风景层 - 天空和草地 */
        .bg-scene {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(180deg, #b8d4e8 0%, #d4e2f0 40%, #c8d9aa 70%, #8aa56e 100%);
        }

        /* 远处的山丘 */
        .bg-hills {
            position: absolute;
            bottom: 80px;
            left: 0;
            width: 100%;
            height: 140px;
            background: repeating-linear-gradient(120deg, #5d7a4a 0px, #5d7a4a 80px, #6d8b56 80px, #6d8b56 160px);
            border-radius: 100% 100% 0 0 / 60px 60px 0 0;
            opacity: 0.6;
        }

        /* 铁轨基础 */
        .rail-track {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 28px;
            background: #2a241e;
            z-index: 5;
            box-shadow: 0 -2px 5px rgba(0,0,0,0.3);
        }

        /* 铁轨枕木 */
        .rail-track::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: repeating-linear-gradient(
                90deg,
                #5a4a3a 0px,
                #5a4a3a 12px,
                #3e3228 12px,
                #3e3228 24px
            );
        }

        /* 铁轨钢轨 */
        .rail-steel {
            position: absolute;
            width: 100%;
            height: 6px;
            background: linear-gradient(180deg, #e8e8e8, #a8a8a8);
            z-index: 6;
        }
        .rail-steel.left {
            bottom: 16px;
        }
        .rail-steel.right {
            bottom: 8px;
        }
        
        /* 铁轨细节 */
        .track-detail {
            position: absolute;
            bottom: 12px;
            left: 0;
            width: 100%;
            height: 18px;
            background: repeating-linear-gradient(
                90deg,
                transparent,
                transparent 30px,
                rgba(0,0,0,0.3) 30px,
                rgba(0,0,0,0.3) 32px,
                transparent 32px,
                transparent 60px
            );
            pointer-events: none;
            z-index: 6;
        }

        /* 火车容器 - 从右向左无限动画 */
        .train-wrapper {
            position: absolute;
            bottom: 22px;
            right: -350px;  /* 从右侧外面开始 */
            display: flex;
            align-items: flex-end;
            gap: 0;
            z-index: 20;
            animation: trainMoveRightToLeft 18s linear infinite;
            filter: drop-shadow(2px 4px 8px rgba(0,0,0,0.3));
        }

        /* 火车动画 - 从右向左无限行驶 */
        @keyframes trainMoveRightToLeft {
            0% {
                transform: translateX(0);
            }
            100% {
                transform: translateX(calc(-100vw - 800px));  /* 向左移动超出整个视口 */
            }
        }

        /* 蒸汽火车头 */
        .locomotive {
            position: relative;
            width: 180px;
            height: 90px;
            background: linear-gradient(135deg, #2c241e, #1a1410);
            border-radius: 20px 12px 8px 8px;
            border-bottom: 4px solid #b94a1c;
            box-shadow: 0 5px 12px rgba(0,0,0,0.5);
            /* 火车头在右边，所以不需要特殊调整 */
        }

        /* 锅炉前脸 - 因为从左到右和从右到左视觉上需要对称，保持原样即可 */
        .locomotive-front {
            position: absolute;
            right: -15px;
            top: 15px;
            width: 35px;
            height: 45px;
            background: #8b5a2b;
            border-radius: 30% 50% 50% 30%;
            border: 2px solid #d49c3a;
            box-shadow: inset 0 0 8px #ffaa44;
        }

        /* 烟囱 */
        .chimney {
            position: absolute;
            top: -22px;
            left: 35px;
            width: 28px;
            height: 38px;
            background: #5a4a3a;
            border-radius: 8px 8px 4px 4px;
            box-shadow: inset 0 -2px 0 #3a2a1e;
        }
        .chimney-top {
            position: absolute;
            top: -8px;
            left: -3px;
            width: 34px;
            height: 12px;
            background: #8b6b42;
            border-radius: 6px 6px 2px 2px;
        }

        /* 驾驶室 */
        .cab {
            position: absolute;
            left: 100px;
            top: 20px;
            width: 50px;
            height: 45px;
            background: #3e2e24;
            border: 2px solid #c9943a;
            border-radius: 6px;
        }
        .cab-window {
            position: absolute;
            top: 10px;
            left: 8px;
            width: 32px;
            height: 24px;
            background: #8ab3cf;
            border-radius: 4px;
            box-shadow: inset 0 0 0 2px #2e3a4a;
        }

        /* 车轮 */
        .wheel {
            position: absolute;
            bottom: -12px;
            width: 28px;
            height: 28px;
            background: radial-gradient(circle, #2a2a2a 30%, #111 80%);
            border-radius: 50%;
            border: 3px solid #b87c4f;
            box-shadow: 0 2px 4px black;
        }
        .wheel-1 { left: 15px; }
        .wheel-2 { left: 55px; }
        .wheel-3 { left: 95px; }
        .wheel-4 { left: 135px; }

        /* 车轮辐条效果 */
        .wheel::after {
            content: '';
            position: absolute;
            top: 6px;
            left: 6px;
            width: 10px;
            height: 10px;
            background: #5a4a3a;
            border-radius: 50%;
        }

        /* 蒸汽效果动画 */
        .steam {
            position: absolute;
            top: -15px;
            left: 25px;
            width: 50px;
            height: 50px;
            pointer-events: none;
        }
        .steam-puff {
            position: absolute;
            background: radial-gradient(circle, rgba(255,245,210,0.8) 0%, rgba(200,180,130,0.4) 70%, transparent 100%);
            border-radius: 50%;
            width: 28px;
            height: 28px;
            opacity: 0;
            animation: steamPuff 1.2s infinite ease-out;
        }
        .steam-puff:nth-child(1) { animation-delay: 0s; left: 5px; top: 5px; }
        .steam-puff:nth-child(2) { animation-delay: 0.4s; left: 15px; top: -2px; width: 32px; height: 32px; }
        .steam-puff:nth-child(3) { animation-delay: 0.8s; left: -5px; top: 8px; width: 24px; height: 24px; }

        @keyframes steamPuff {
            0% {
                opacity: 0.8;
                transform: scale(0.3) translateY(0);
            }
            50% {
                opacity: 0.6;
                transform: scale(1) translateY(-12px);
            }
            100% {
                opacity: 0;
                transform: scale(1.6) translateY(-28px);
            }
        }

        /* 煤水车 */
        .tender {
            position: relative;
            width: 100px;
            height: 70px;
            background: linear-gradient(145deg, #2a241c, #1c1612);
            border-radius: 8px 12px 8px 8px;
            border-bottom: 3px solid #b94a1c;
            margin-left: -2px;
        }
        .coal-pile {
            position: absolute;
            top: 10px;
            left: 15px;
            width: 70px;
            height: 28px;
            background: #2a2a1e;
            border-radius: 20px 20px 8px 8px;
            box-shadow: inset 0 2px 4px rgba(0,0,0,0.5);
        }
        .coal-pile::before {
            content: '⚫⚫⚫';
            font-size: 12px;
            letter-spacing: 2px;
            color: #2e2e1a;
            position: absolute;
            top: 6px;
            left: 12px;
            opacity: 0.6;
        }
        
        /* 煤水车的车轮 */
        .tender .wheel {
            position: absolute;
            bottom: -10px;
        }
        .tender .wheel:nth-of-type(1) { left: 10px; }
        .tender .wheel:nth-of-type(2) { left: 55px; }

        /* 车厢 */
        .carriage {
            position: relative;
            width: 110px;
            height: 65px;
            background: linear-gradient(100deg, #8b6248, #5a3e2e);
            border-radius: 8px 12px 8px 8px;
            border-bottom: 3px solid #d49c3a;
            margin-left: -2px;
        }
        .carriage-window {
            position: absolute;
            top: 18px;
            width: 28px;
            height: 28px;
            background: #b9cfec;
            border-radius: 4px;
            border: 2px solid #ddb56b;
            box-shadow: inset 0 0 0 1px #1e2a36;
        }
        .carriage-window.left { left: 15px; }
        .carriage-window.mid { left: 50px; }
        .carriage-window.right { left: 70px; }
        
        /* 车厢车轮 */
        .carriage .wheel {
            position: absolute;
            bottom: -10px;
        }
        .carriage .wheel:nth-of-type(1) { left: 12px; }
        .carriage .wheel:nth-of-type(2) { left: 70px; }

        /* 小车厢样式 */
        .carriage-small {
            width: 95px;
        }
        .carriage-small .carriage-window { width: 22px; height: 22px; top: 20px; }
        .carriage-small .wheel:nth-of-type(1) { left: 10px; }
        .carriage-small .wheel:nth-of-type(2) { left: 68px; }

        /* 守车装饰 */
        .caboose-deco {
            position: absolute;
            right: 8px;
            top: 12px;
            background: #c9943a;
            width: 14px;
            height: 14px;
            border-radius: 2px;
        }

        /* 铁轨旁的小草 */
        .grass-tufts {
            position: absolute;
            bottom: 28px;
            left: 0;
            width: 100%;
            height: 30px;
            pointer-events: none;
            z-index: 4;
        }
        .grass {
            position: absolute;
            bottom: 0;
            width: 3px;
            height: 18px;
            background: #5a8742;
            border-radius: 2px;
        }
        .grass:nth-child(1) { left: 5%; height: 22px; width: 2px; background: #6e9f4a; }
        .grass:nth-child(2) { left: 15%; height: 16px; }
        .grass:nth-child(3) { left: 28%; height: 28px; background: #7dad52; }
        .grass:nth-child(4) { left: 42%; height: 12px; }
        .grass:nth-child(5) { left: 55%; height: 24px; }
        .grass:nth-child(6) { left: 68%; height: 18px; }
        .grass:nth-child(7) { left: 82%; height: 30px; background: #4f7736; }
        .grass:nth-child(8) { left: 93%; height: 14px; }

        /* 云朵动画 - 从右向左飘，与火车方向一致增加氛围 */
        .cloud {
            position: absolute;
            background: rgba(255,250,230,0.85);
            border-radius: 80% 20% 85% 15% / 70% 60% 40% 30%;
            filter: blur(4px);
            box-shadow: 0 8px 20px rgba(0,0,0,0.1);
            animation: cloudFloatRightToLeft 50s linear infinite;
            z-index: 2;
        }
        @keyframes cloudFloatRightToLeft {
            0% {
                transform: translateX(0);
            }
            100% {
                transform: translateX(calc(-100vw - 300px));
            }
        }
        .cloud1 { width: 100px; height: 60px; top: 8%; right: -150px; left: auto; animation-duration: 65s; opacity: 0.6; }
        .cloud2 { width: 140px; height: 75px; top: 15%; right: -200px; left: auto; animation-duration: 80s; opacity: 0.5; }
        .cloud3 { width: 80px; height: 45px; top: 3%; right: -100px; left: auto; animation-duration: 55s; animation-delay: -10s; }

        /* 演示用的内容区样式 - 展示背景效果 */
        .demo-content {
            position: relative;
            z-index: 10;
            max-width: 800px;
            margin: 0 auto;
            padding: 60px 40px;
            color: white;
            text-align: center;
            font-family: system-ui, -apple-system, 'Segoe UI', sans-serif;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

        .demo-card {
            background: rgba(0, 0, 0, 0.55);
            backdrop-filter: blur(8px);
            border-radius: 24px;
            padding: 48px 40px;
            border: 1px solid rgba(255,255,255,0.25);
            box-shadow: 0 20px 40px rgba(0,0,0,0.3);
        }

        .demo-card h1 {
            font-size: 3rem;
            margin-bottom: 1rem;
            font-weight: 700;
            letter-spacing: -0.02em;
        }

        .demo-card h1 span {
            color: #ffaa44;
        }

        .demo-card p {
            font-size: 1.2rem;
            line-height: 1.6;
            opacity: 0.9;
            margin-bottom: 1.5rem;
        }

        .demo-card .direction-badge {
            display: inline-block;
            background: rgba(185, 74, 28, 0.8);
            padding: 8px 20px;
            border-radius: 40px;
            font-size: 0.9rem;
            font-weight: 500;
            margin-top: 16px;
        }

        hr {
            margin: 24px 0;
            border-color: rgba(255,255,255,0.2);
        }

        .note {
            font-size: 0.85rem;
            opacity: 0.7;
        }




  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    background: var(--coal);
    color: var(--steam);
    font-family: 'Georgia', serif;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    padding-top: 56px;
  }

  /* ── NAV ── */
  .rr-nav {
    background: var(--iron);
    border-bottom: 3px solid var(--rust);
    padding: 0 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0;
    position: sticky; top: 0; z-index: 100;
    flex-wrap: wrap;
  }

  .rr-nav-item {
    position: relative;
  }

  .rr-nav-link {
    display: flex; align-items: center; gap: 5px;
    color: var(--steam);
    text-decoration: none;
    font-family: 'Courier New', monospace;
    font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase;
    padding: 18px 20px;
    border-bottom: 3px solid transparent;
    transition: all 0.2s;
    cursor: pointer;
    background: none; border-top: none; border-left: none; border-right: none;
    white-space: nowrap;
  }
  .rr-nav-link:hover, .rr-nav-link.active {
    color: var(--gold);
    border-bottom-color: var(--gold);
  }
  .rr-nav-link .arrow {
    font-size: 8px; transition: transform 0.2s;
  }
  .rr-nav-item.open .arrow { transform: rotate(180deg); }

  /* Dropdown */
  .rr-dropdown {
    display: none;
    position: absolute; top: 100%; left: 0;
    background: var(--iron2);
    border: 1px solid rgba(255,255,255,0.1);
    border-top: 2px solid var(--rust);
    border-radius: 0 0 8px 8px;
    min-width: 180px;
    box-shadow: 0 8px 24px rgba(0,0,0,0.4);
    overflow: hidden;
    z-index: 200;
  }
  .rr-nav-item.open .rr-dropdown { display: block; }

  .rr-dropdown a {
    display: block;
    padding: 12px 18px;
    color: var(--smoke);
    text-decoration: none;
    font-family: 'Courier New', monospace;
    font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase;
    transition: all 0.15s;
    border-bottom: 1px solid rgba(255,255,255,0.05);
  }
  .rr-dropdown a:last-child { border-bottom: none; }
  .rr-dropdown a:hover { background: rgba(201,148,58,0.15); color: var(--gold); padding-left: 24px; }

  /* ── HERO ── */
  .rr-hero {
    position: relative;
    padding: 80px 24px 64px;
    text-align: center;
    background: radial-gradient(ellipse at 50% 0%, #3d2a18 0%, var(--coal) 70%);
    overflow: hidden;
  }
  .rr-hero::before {
    content: '';
    position: absolute; inset: 0;
    background-image: repeating-linear-gradient(
      90deg, transparent, transparent 60px,
      rgba(255,255,255,0.015) 60px, rgba(255,255,255,0.015) 61px
    );
    pointer-events: none;
  }
  .rr-hero-track {
    position: absolute; bottom: 0; left: 0; right: 0; height: 20px;
    background: repeating-linear-gradient(
      90deg, var(--rail) 0px, var(--rail) 30px, transparent 30px, transparent 50px
    );
    opacity: 0.4;
  }
  .rr-hero-icon { font-size: 72px; display: block; margin-bottom: 16px;
    animation: rr-chug 3s ease-in-out infinite; }
  @keyframes rr-chug {
    0%,100% { transform: translateX(0); }
    25%      { transform: translateX(4px); }
    75%      { transform: translateX(-4px); }
  }
  .rr-hero-badge {
    font-family: 'Courier New', monospace; font-size: 10px;
    letter-spacing: 0.3em; text-transform: uppercase;
    color: var(--gold); margin-bottom: 16px; opacity: 0.8;
  }
  .rr-hero-title {
    font-size: clamp(36px, 7vw, 76px); font-weight: 700;
    color: var(--steam); line-height: 1; margin-bottom: 16px;
    letter-spacing: -0.01em;
  }
  .rr-hero-title em { font-style: italic; color: var(--ember); }
  .rr-hero-sub {
    font-size: 16px; color: var(--smoke); max-width: 560px;
    margin: 0 auto 36px; line-height: 1.7;
  }
  .rr-hero-btns { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }
  .rr-btn-primary {
    padding: 14px 28px; background: var(--rust); border: none;
    border-radius: 4px; color: #fff; text-decoration: none;
    font-family: 'Courier New', monospace; font-size: 12px;
    letter-spacing: 0.12em; text-transform: uppercase;
    transition: background 0.2s, transform 0.15s; cursor: pointer;
  }
  .rr-btn-primary:hover { background: var(--ember); transform: translateY(-2px); }
  .rr-btn-secondary {
    padding: 14px 28px; background: transparent;
    border: 1px solid var(--gold); border-radius: 4px;
    color: var(--gold); text-decoration: none;
    font-family: 'Courier New', monospace; font-size: 12px;
    letter-spacing: 0.12em; text-transform: uppercase;
    transition: all 0.2s;
  }
  .rr-btn-secondary:hover { background: rgba(201,148,58,0.15); transform: translateY(-2px); }

  /* ── CONTENT ── */
  .rr-wrap { max-width: 1100px; margin: 0 auto; padding: 60px 20px 80px; flex: 1; }

  .rr-section-title {
    font-family: 'Courier New', monospace; font-size: 10px;
    letter-spacing: 0.3em; text-transform: uppercase;
    color: var(--gold); margin-bottom: 24px;
    display: flex; align-items: center; gap: 12px;
  }
  .rr-section-title::after { content: ''; flex: 1; height: 1px; background: rgba(255,255,255,0.08); }

  /* News grid */
  .rr-news-grid {
    display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 16px; margin-bottom: 60px;
  }
  .rr-news-card {
    background: var(--iron); border: 1px solid rgba(255,255,255,0.07);
    border-radius: 10px; padding: 22px;
    border-top: 3px solid var(--rust);
    transition: transform 0.2s, box-shadow 0.2s;
  }
  .rr-news-card:hover { transform: translateY(-3px); box-shadow: 0 8px 24px rgba(0,0,0,0.3); }
  .rr-news-date {
    font-family: 'Courier New', monospace; font-size: 10px;
    letter-spacing: 0.1em; text-transform: uppercase;
    color: var(--gold); margin-bottom: 10px;
  }
  .rr-news-card h3 { font-size: 18px; color: var(--steam); margin-bottom: 8px; line-height: 1.3; }
  .rr-news-card p { font-size: 13px; color: var(--smoke); line-height: 1.7; margin-bottom: 14px; }
  .rr-news-tag {
    font-family: 'Courier New', monospace; font-size: 9px;
    letter-spacing: 0.15em; text-transform: uppercase;
    padding: 4px 10px; border-radius: 2px;
    background: rgba(201,148,58,0.15); color: var(--gold);
    border: 1px solid rgba(201,148,58,0.2);
  }

  /* Quick links */
  .rr-quick {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 12px; margin-bottom: 60px;
  }
  @media (max-width: 900px) { .rr-quick { grid-template-columns: repeat(2, 1fr); } }
  @media (max-width: 500px) { .rr-quick { grid-template-columns: 1fr 1fr; } }
  .rr-quick-card {
    background: var(--iron); border: 1px solid rgba(255,255,255,0.07);
    border-radius: 10px; padding: 20px; text-align: center;
    text-decoration: none; transition: all 0.2s;
  }
  .rr-quick-card:hover { background: var(--iron2); transform: translateY(-3px);
    border-color: var(--gold); }
  .rr-quick-icon { font-size: 32px; display: block; margin-bottom: 10px; }
  .rr-quick-label {
    font-family: 'Courier New', monospace; font-size: 10px;
    letter-spacing: 0.15em; text-transform: uppercase; color: var(--gold);
  }
  .rr-quick-sub { font-size: 12px; color: var(--smoke); margin-top: 4px; }

  /* Contact */
  .rr-contact {
    background: var(--iron); border: 1px solid rgba(255,255,255,0.07);
    border-radius: 12px; padding: 36px;
    border-left: 4px solid var(--rust);
    display: flex; justify-content: space-between; align-items: center;
    flex-wrap: wrap; gap: 24px;
  }
  .rr-contact h2 { font-size: 24px; color: var(--steam); margin-bottom: 12px; }
  .rr-contact p { font-size: 14px; color: var(--smoke); line-height: 1.8; }
  .rr-contact p span { color: var(--gold); font-family: 'Courier New', monospace; font-size: 12px; }

  /* Footer */
  .rr-footer {
    background: var(--iron); border-top: 1px solid rgba(255,255,255,0.07);
    padding: 20px; text-align: center;
    font-family: 'Courier New', monospace; font-size: 10px;
    letter-spacing: 0.1em; text-transform: uppercase; color: var(--smoke);
  }

  /* Floating AI button */
  .rr-ai-fab {
    position: fixed;
    bottom: 28px; right: 28px;
    display: flex; align-items: center; gap: 10px;
    background: linear-gradient(135deg, var(--rust), var(--ember));
    color: #fff; text-decoration: none;
    padding: 12px 20px 12px 14px;
    border-radius: 50px;
    box-shadow: 0 4px 20px rgba(185,74,28,0.5);
    font-family: 'Courier New', monospace;
    font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase;
    z-index: 9999;
    transition: all 0.2s;
    border: 1px solid rgba(255,255,255,0.2);
  }
  .rr-ai-fab:hover { transform: translateY(-3px); box-shadow: 0 8px 28px rgba(185,74,28,0.6); }
  .rr-ai-fab-icon { font-size: 22px; line-height: 1; }

  @media (max-width: 600px) {
    .rr-contact { flex-direction: column; }
    .rr-ai-fab { bottom: 16px; right: 16px; padding: 10px 16px 10px 12px; font-size: 10px; }
  }
</style>


<body>
    <!-- 不断行进的火车背景层 - 从右向左行驶 -->
    <div class="moving-train-background">
        <div class="bg-scene"></div>
        <div class="bg-hills"></div>
        
        <!-- 铁轨系统 -->
        <div class="rail-track"></div>
        <div class="rail-steel left"></div>
        <div class="rail-steel right"></div>
        <div class="track-detail"></div>
        
        <!-- 动态火车 (从右向左无限行进) -->
        <div class="train-wrapper">
            <!-- 守车/最后一节车厢 (因为从右向左，最右边是火车头，所以顺序：车尾在左，车头在右) -->
            <!-- 为了让火车看起来是从右向左正常行驶，车头应该在右边，所以我们把车头放在最右边 -->
            
            <!-- 第三节车厢 (守车风格) -->
            <div class="carriage" style="width: 100px;">
                <div class="carriage-window left"></div>
                <div class="carriage-window right" style="left:68px;"></div>
                <div class="caboose-deco"></div>
                <div class="wheel"></div>
                <div class="wheel" style="left:72px;"></div>
            </div>
            
            <!-- 第二节车厢 (小车厢) -->
            <div class="carriage carriage-small">
                <div class="carriage-window left" style="left:12px;"></div>
                <div class="carriage-window right" style="left:58px;"></div>
                <div class="wheel"></div>
                <div class="wheel" style="left:68px;"></div>
            </div>
            
            <!-- 第一节车厢 -->
            <div class="carriage">
                <div class="carriage-window left"></div>
                <div class="carriage-window mid"></div>
                <div class="wheel"></div>
                <div class="wheel" style="left:70px;"></div>
            </div>
            
            <!-- 煤水车 -->
            <div class="tender">
                <div class="coal-pile"></div>
                <div class="wheel"></div>
                <div class="wheel" style="left:55px;"></div>
            </div>
            
            <!-- 蒸汽火车头 (放在最右边，因为从右向左行驶时车头在前) -->
            <div class="locomotive">
                <div class="locomotive-front"></div>
                <div class="chimney">
                    <div class="chimney-top"></div>
                    <div class="steam">
                        <div class="steam-puff"></div>
                        <div class="steam-puff"></div>
                        <div class="steam-puff"></div>
                    </div>
                </div>
                <div class="cab">
                    <div class="cab-window"></div>
                </div>
                <!-- 车轮 -->
                <div class="wheel wheel-1"></div>
                <div class="wheel wheel-2"></div>
                <div class="wheel wheel-3"></div>
                <div class="wheel wheel-4"></div>
            </div>
        </div>
        
        <!-- 草地装饰 -->
        <div class="grass-tufts">
            <div class="grass"></div><div class="grass"></div><div class="grass"></div>
            <div class="grass"></div><div class="grass"></div><div class="grass"></div>
            <div class="grass"></div><div class="grass"></div>
        </div>
        
        <!-- 漂浮云朵 (从右向左飘) -->
        <div class="cloud cloud1"></div>
        <div class="cloud cloud2"></div>
        <div class="cloud cloud3"></div>
    </div>


<!-- HERO -->
<div class="rr-hero">
  <span class="rr-hero-icon">🚂</span>
  <div class="rr-hero-badge">Since 1987 · Heritage Rail · Old Poway Park</div>
  <h1 class="rr-hero-title">Poway–Midland<br><em>Railroad</em></h1>
  <p class="rr-hero-sub">Your digital depot for steam, steel, and stories. Explore vintage locomotives, real-time schedules, and the volunteers who keep the iron horse alive every weekend in Poway, CA.</p>
  <div class="rr-hero-btns">
    <a href="/railroad/calendar" class="rr-btn-primary">🎟 Book a Ride</a>
    <a href="/railroad/trains" class="rr-btn-secondary">🚂 Our Fleet</a>
  </div>
  <div class="rr-hero-track"></div>
</div>

<div class="rr-wrap">

  <!-- Quick links -->
  <div class="rr-section-title">Quick Access</div>
  <div class="rr-quick">
    <a href="/railroad/schedule" class="rr-quick-card">
      <span class="rr-quick-icon">📅</span>
      <div class="rr-quick-label">Schedule</div>
      <div class="rr-quick-sub">View today's rides</div>
    </a>
    <a href="/railroad/calendar" class="rr-quick-card">
      <span class="rr-quick-icon">🎟</span>
      <div class="rr-quick-label">Book a Ride</div>
      <div class="rr-quick-sub">Reserve your seat</div>
    </a>
    <a href="/railroad/trains" class="rr-quick-card">
      <span class="rr-quick-icon">🚂</span>
      <div class="rr-quick-label">Our Fleet</div>
      <div class="rr-quick-sub">Meet the trains</div>
    </a>
    <a href="/railroad/notes" class="rr-quick-card">
      <span class="rr-quick-icon">📸</span>
      <div class="rr-quick-label">Notes</div>
      <div class="rr-quick-sub">Share your experience</div>
    </a>
    <a href="/railroad/forecast" class="rr-quick-card">
      <span class="rr-quick-icon">📊</span>
      <div class="rr-quick-label">Visitor Forecast</div>
      <div class="rr-quick-sub">ML prediction</div>
    </a>
    <a href="/railroad/events" class="rr-quick-card">
      <span class="rr-quick-icon">🎪</span>
      <div class="rr-quick-label">Events</div>
      <div class="rr-quick-sub">Upcoming activities</div>
    </a>
    <a href="/railroad/camera" class="rr-quick-card">
      <span class="rr-quick-icon">🎥</span>
      <div class="rr-quick-label">Live Camera</div>
      <div class="rr-quick-sub">Watch the park live</div>
    </a>
    <a href="/railroad/assistant" class="rr-quick-card">
      <span class="rr-quick-icon">🤖</span>
      <div class="rr-quick-label">AI Assistant</div>
      <div class="rr-quick-sub">Visit recommendations</div>
    </a>
  </div>

  <!-- News -->
  <div class="rr-section-title">Latest News from the Line</div>
  <div class="rr-news-grid">
    <div class="rr-news-card">
      <div class="rr-news-date">📆 March 10, 2026</div>
      <h3>Steam Every Saturday!</h3>
      <p>Starting 2026, our beloved 1907 Baldwin Steam Locomotive runs every single Saturday. Come feel the steam and hear the whistle every weekend.</p>
      <span class="rr-news-tag">steam · event</span>
    </div>
    <div class="rr-news-card">
      <div class="rr-news-date">📆 February 28, 2026</div>
      <h3>New Online Booking</h3>
      <p>Reserve your seat before you arrive! Our new online booking system lets you pick your ride time and secure your spot ahead of the weekend rush.</p>
      <span class="rr-news-tag">booking · new</span>
    </div>
    <div class="rr-news-card">
      <div class="rr-news-date">📆 February 12, 2026</div>
      <h3>Depot Restoration Begins</h3>
      <p>The historic Midland depot is getting a faithful renovation. Volunteer carpenters and historians are working to preserve the 1890s structure.</p>
      <span class="rr-news-tag">preservation</span>
    </div>
  </div>

  <!-- Contact -->
  <div class="rr-section-title">Contact Us</div>
  <div class="rr-contact">
    <div>
      <h2>🚉 Get in Touch</h2>
      <p>
        <span>📞</span> (858) 748-0379<br>
        <span>📧</span> info@powaymidlandrr.org<br>
        <span>📍</span> 14134 Midland Rd, Poway, CA 92064<br>
        <span>🕐</span> Saturdays & Select Sundays · 10am – 2pm
      </p>
    </div>
    <a href="https://powaymidlandrr.org" target="_blank" class="rr-btn-primary">Visit Official Site →</a>
  </div>

</div>

<!-- Floating AI Assistant button -->
<a href="/railroad/assistant" class="rr-ai-fab">
  <span class="rr-ai-fab-icon">🤖</span>
  AI Assistant
</a>

<!-- FOOTER -->
<div class="rr-footer">
  © 2026 Poway–Midland Railroad · All aboard for a journey through rail heritage
</div>
<body>
