export default function Home() {
  return (
    <div dangerouslySetInnerHTML={{ __html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ramya Gopinath - Portrait Artist</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Georgia', serif;
            line-height: 1.6;
            color: #6b5b73;
            background: linear-gradient(135deg, #f8f4f0 0%, #f0e6f7 100%);
            min-height: 100vh;
        }

        header {
            background: rgba(255, 255, 255, 0.95);
            padding: 2rem 0;
            text-align: center;
            box-shadow: 0 2px 10px rgba(162, 155, 254, 0.1);
        }

        h1 {
            color: #8b7ba8;
            font-size: 2.5rem;
            margin-bottom: 0.5rem;
            font-weight: 300;
        }

        .subtitle {
            color: #a29bfe;
            font-size: 1.1rem;
            font-style: italic;
        }

        nav {
            margin: 2rem 0;
        }

        nav ul {
            list-style: none;
            display: flex;
            justify-content: center;
            gap: 2rem;
        }

        nav a {
            color: #8b7ba8;
            text-decoration: none;
            padding: 0.5rem 1rem;
            border-radius: 25px;
            transition: all 0.3s ease;
        }

        nav a:hover {
            background: #e8d5e8;
            color: #6b5b73;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 2rem;
        }

        .hero {
            text-align: center;
            padding: 4rem 0;
        }

        .hero h2 {
            color: #8b7ba8;
            font-size: 2rem;
            margin-bottom: 1rem;
            font-weight: 300;
        }

        .hero p {
            font-size: 1.1rem;
            max-width: 600px;
            margin: 0 auto 2rem;
            color: #6b5b73;
        }

        .gallery {
            padding: 4rem 0;
        }

        .gallery h3 {
            text-align: center;
            color: #8b7ba8;
            font-size: 2rem;
            margin-bottom: 3rem;
            font-weight: 300;
        }

        .artwork-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            margin-bottom: 3rem;
        }

        .artwork-card {
            background: white;
            border-radius: 15px;
            overflow: hidden;
            box-shadow: 0 8px 25px rgba(162, 155, 254, 0.15);
            transition: transform 0.3s ease;
        }

        .artwork-card:hover {
            transform: translateY(-5px);
        }

        .artwork-placeholder {
            height: 250px;
            background: linear-gradient(45deg, #ffeaa7, #fab1a0, #fd79a8, #a29bfe);
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 1.1rem;
        }

        .artwork-info {
            padding: 1.5rem;
        }

        .artwork-title {
            color: #8b7ba8;
            font-size: 1.2rem;
            margin-bottom: 0.5rem;
        }

        .artwork-details {
            color: #6b5b73;
            font-size: 0.9rem;
        }

        .about {
            background: rgba(255, 255, 255, 0.7);
            padding: 4rem 0;
            margin: 4rem 0;
            border-radius: 25px;
        }

        .about-content {
            max-width: 800px;
            margin: 0 auto;
            text-align: center;
        }

        .about h3 {
            color: #8b7ba8;
            font-size: 2rem;
            margin-bottom: 2rem;
            font-weight: 300;
        }

        .about p {
            margin-bottom: 1.5rem;
            font-size: 1.1rem;
        }

        .contact {
            text-align: center;
            padding: 4rem 0;
        }

        .contact h3 {
            color: #8b7ba8;
            font-size: 2rem;
            margin-bottom: 2rem;
            font-weight: 300;
        }

        .contact-info {
            background: rgba(255, 255, 255, 0.8);
            padding: 2rem;
            border-radius: 15px;
            display: inline-block;
            box-shadow: 0 5px 15px rgba(162, 155, 254, 0.1);
        }

        footer {
            background: #8b7ba8;
            color: white;
            text-align: center;
            padding: 2rem 0;
            margin-top: 4rem;
        }

        @media (max-width: 768px) {
            nav ul {
                flex-direction: column;
                gap: 1rem;
            }

            h1 {
                font-size: 2rem;
            }

            .hero h2 {
                font-size: 1.5rem;
            }

            .artwork-grid {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <header>
        <h1>Ramya Gopinath</h1>
        <p class="subtitle">Portrait Artist</p>
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#gallery">Gallery</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>

    <div class="container">
        <section id="home" class="hero">
            <h2>Capturing Life Through Art</h2>
            <p>Welcome to my world of portrait painting. I specialize in creating beautiful, lifelike portraits that capture the essence and personality of each subject using soft, elegant techniques and a gentle color palette.</p>
        </section>

        <section id="gallery" class="gallery">
            <h3>Recent Portraits</h3>
            <div class="artwork-grid">
                <div class="artwork-card">
                    <div class="artwork-placeholder">Portrait Sample 1</div>
                    <div class="artwork-info">
                        <div class="artwork-title">Family Portrait</div>
                        <div class="artwork-details">Oil on Canvas • 16" x 20"</div>
                    </div>
                </div>
                <div class="artwork-card">
                    <div class="artwork-placeholder">Portrait Sample 2</div>
                    <div class="artwork-info">
                        <div class="artwork-title">Child's Portrait</div>
                        <div class="artwork-details">Pastel on Paper • 12" x 16"</div>
                    </div>
                </div>
                <div class="artwork-card">
                    <div class="artwork-placeholder">Portrait Sample 3</div>
                    <div class="artwork-info">
                        <div class="artwork-title">Wedding Portrait</div>
                        <div class="artwork-details">Oil on Canvas • 18" x 24"</div>
                    </div>
                </div>
                <div class="artwork-card">
                    <div class="artwork-placeholder">Portrait Sample 4</div>
                    <div class="artwork-info">
                        <div class="artwork-title">Senior Portrait</div>
                        <div class="artwork-details">Watercolor • 11" x 14"</div>
                    </div>
                </div>
                <div class="artwork-card">
                    <div class="artwork-placeholder">Portrait Sample 5</div>
                    <div class="artwork-info">
                        <div class="artwork-title">Pet Portrait</div>
                        <div class="artwork-details">Acrylic on Canvas • 12" x 12"</div>
                    </div>
                </div>
                <div class="artwork-card">
                    <div class="artwork-placeholder">Portrait Sample 6</div>
                    <div class="artwork-info">
                        <div class="artwork-title">Couple's Portrait</div>
                        <div class="artwork-details">Oil on Canvas • 20" x 24"</div>
                    </div>
                </div>
            </div>
        </section>

        <section id="about" class="about">
            <div class="about-content">
                <h3>About the Artist</h3>
                <p>I'm Ramya Gopinath, a passionate portrait artist with a love for capturing the unique beauty in every face I paint. My journey with art began years ago, and I've developed a distinctive style that emphasizes soft, natural colors and careful attention to detail.</p>
                <p>I work primarily with oils, pastels, and watercolors, always striving to create portraits that don't just look like my subjects, but capture their spirit and personality. Each painting is a collaboration between artist and subject, resulting in a timeless piece of art.</p>
                <p>Whether it's a family portrait, wedding memento, or a cherished pet, I approach each commission with care, patience, and artistic integrity.</p>
            </div>
        </section>

        <section id="contact" class="contact">
            <h3>Commission a Portrait</h3>
            <div class="contact-info">
                <p><strong>Email:</strong> ramya.art@example.com</p>
                <p><strong>Phone:</strong> (555) 123-4567</p>
                <p><strong>Studio Hours:</strong> By appointment</p>
                <p style="margin-top: 1rem; font-style: italic;">I'd love to discuss your portrait ideas and bring your vision to life.</p>
            </div>
        </section>
    </div>

    <footer>
        <p>&copy; 2024 Ramya Gopinath. All rights reserved.</p>
    </footer>
</body>
</html>` }} />
  );
}