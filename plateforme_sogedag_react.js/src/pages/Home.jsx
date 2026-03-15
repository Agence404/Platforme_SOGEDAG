import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CardCarousel from '../components/CardCarousel';
import './Home.css';
import Footer from '../components/Footer';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const homeRef = useRef(null);

  useEffect(() => {
    const onRefresh = () => ScrollTrigger.refresh();

    const ctx = gsap.context(() => {
      /* =========================
         WHY ART
      ========================= */
      if (window.innerWidth > 980) {
        ScrollTrigger.create({
          trigger: '.why-art',
          start: 'top top',
          end: 'bottom bottom',
          pin: '.why-art__intro',
          pinSpacing: false,
        });
      }

      gsap.set('.why-art__eyebrow, .why-art__title, .why-art__subtitle', {
        opacity: 0,
        y: 50,
      });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: '.why-art__intro',
            start: 'top 82%',
          },
        })
        .to('.why-art__eyebrow', {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power3.out',
        })
        .to(
          '.why-art__title',
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: 'power3.out',
          },
          '-=0.35'
        )
        .to(
          '.why-art__subtitle',
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            ease: 'power3.out',
          },
          '-=0.5'
        );

      gsap.to('.why-art__ambient--one', {
        x: 70,
        y: 50,
        scrollTrigger: {
          trigger: '.why-art',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.3,
        },
      });

      gsap.to('.why-art__ambient--two', {
        x: -80,
        y: -60,
        scrollTrigger: {
          trigger: '.why-art',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.5,
        },
      });

      gsap.to('.why-art__ambient--three', {
        y: -80,
        scrollTrigger: {
          trigger: '.why-art',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.4,
        },
      });

      document.querySelectorAll('.why-art__panel').forEach((panel) => {
        const image = panel.querySelector('.why-art__media img');
        const media = panel.querySelector('.why-art__media');
        const word = panel.querySelector('.why-art__bg-word');
        const content = panel.querySelector('.why-art__content');
        const floating = panel.querySelector('.why-art__floating');
        const badge = panel.querySelector('.why-art__badge');
        const title = panel.querySelector('h3');
        const text = panel.querySelector('.why-art__content p');
        const line = panel.querySelector('.why-art__line');

        gsap.set([content, floating], { opacity: 0, y: 90 });
        gsap.set([badge, title, text], { opacity: 0, y: 40 });
        gsap.set(word, { opacity: 0, scale: 0.84, rotate: -8 });
        gsap.set(image, { scale: 1.18, y: 100 });
        gsap.set(media, { clipPath: 'inset(12% 8% 12% 8% round 34px)' });

        if (line) {
          gsap.set(line, { scaleX: 0, transformOrigin: 'center center' });
        }

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: panel,
            start: 'top 72%',
            end: 'bottom 20%',
            scrub: 1.15,
          },
        });

        tl.to(
          word,
          {
            opacity: 1,
            scale: 1,
            rotate: 0,
            ease: 'power3.out',
          },
          0
        )
          .to(
            media,
            {
              clipPath: 'inset(0% 0% 0% 0% round 34px)',
              ease: 'power3.out',
            },
            0
          )
          .to(
            image,
            {
              scale: 1,
              y: 0,
              ease: 'none',
            },
            0
          )
          .to(
            content,
            {
              opacity: 1,
              y: 0,
              ease: 'power3.out',
            },
            0.12
          )
          .to(
            floating,
            {
              opacity: 1,
              y: 0,
              ease: 'power3.out',
            },
            0.22
          )
          .to(
            badge,
            {
              opacity: 1,
              y: 0,
              ease: 'power3.out',
            },
            0.18
          )
          .to(
            title,
            {
              opacity: 1,
              y: 0,
              ease: 'power3.out',
            },
            0.22
          )
          .to(
            text,
            {
              opacity: 1,
              y: 0,
              ease: 'power3.out',
            },
            0.26
          );

        if (line) {
          tl.to(
            line,
            {
              scaleX: 1,
              ease: 'power3.out',
            },
            0.16
          );
        }

        gsap.to(word, {
          yPercent: -22,
          scrollTrigger: {
            trigger: panel,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.4,
          },
        });

        gsap.to(image, {
          yPercent: -12,
          scrollTrigger: {
            trigger: panel,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.6,
          },
        });

        gsap.to(content, {
          yPercent: -8,
          scrollTrigger: {
            trigger: panel,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.2,
          },
        });

        gsap.to(floating, {
          y: -16,
          repeat: -1,
          yoyo: true,
          duration: 2.6,
          ease: 'sine.inOut',
        });
      });

      /* =========================
         CATALOGUE
      ========================= */
      const catalogue = document.querySelector('.catalogue-x');
      const catalogueTrack = document.querySelector('.catalogue-x__track');
      const cataloguePin = document.querySelector('.catalogue-x__pin');
      const cataloguePanels = gsap.utils.toArray('.catalogue-x__panel');
      const progressBar = document.querySelector('.catalogue-x__progress-bar');

      if (catalogue && catalogueTrack && cataloguePin && cataloguePanels.length) {
        const mm = gsap.matchMedia();

        gsap.set('.catalogue-x__eyebrow, .catalogue-x__title, .catalogue-x__subtitle', {
          opacity: 0,
          y: 50,
        });

        gsap
          .timeline({
            scrollTrigger: {
              trigger: '.catalogue-x__intro',
              start: 'top 82%',
            },
          })
          .to('.catalogue-x__eyebrow', {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: 'power3.out',
          })
          .to(
            '.catalogue-x__title',
            {
              opacity: 1,
              y: 0,
              duration: 0.9,
              ease: 'power3.out',
            },
            '-=0.35'
          )
          .to(
            '.catalogue-x__subtitle',
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: 'power3.out',
            },
            '-=0.45'
          );

        mm.add('(min-width: 769px)', () => {
          gsap.set(cataloguePanels, { opacity: 1 });

          cataloguePanels.forEach((panel) => {
            const bgWord = panel.querySelector('.catalogue-x__panel-bg-word');
            const image = panel.querySelector('.catalogue-x__image');
            const imageWrap = panel.querySelector('.catalogue-x__image-wrap');
            const overlay = panel.querySelector('.catalogue-x__overlay');
            const content = panel.querySelector('.catalogue-x__content');
            const meta = panel.querySelector('.catalogue-x__meta');
            const line = panel.querySelector('.catalogue-x__line');
            const heading = panel.querySelector('.catalogue-x__heading');
            const text = panel.querySelector('.catalogue-x__text');

            gsap.set(bgWord, { opacity: 0, x: -60, y: 40, rotate: -4, scale: 0.94 });
            gsap.set(image, { scale: 1.18, xPercent: 3 });
            gsap.set(imageWrap, { clipPath: 'inset(0% 0% 0% 0% round 0px)' });
            gsap.set(content, {
              opacity: 0,
              y: 80,
              rotateX: -8,
              scale: 0.96,
              transformPerspective: 1200,
            });
            gsap.set([meta, heading, text], { opacity: 0, y: 34 });
            gsap.set(line, { scaleX: 0 });
            gsap.set(overlay, { opacity: 0.92 });
          });

          const maxX = () => catalogueTrack.scrollWidth - window.innerWidth;

          const horizontalTween = gsap.to(catalogueTrack, {
            x: () => -maxX(),
            ease: 'none',
            scrollTrigger: {
              trigger: cataloguePin,
              start: 'top top',
              end: () => '+=' + maxX(),
              scrub: 1.1,
              pin: true,
              anticipatePin: 1,
              invalidateOnRefresh: true,
              onUpdate: (self) => {
                if (progressBar) {
                  gsap.set(progressBar, { width: self.progress * 100 + '%' });
                }
              },
            },
          });

          cataloguePanels.forEach((panel, index) => {
            const bgWord = panel.querySelector('.catalogue-x__panel-bg-word');
            const image = panel.querySelector('.catalogue-x__image');
            const imageWrap = panel.querySelector('.catalogue-x__image-wrap');
            const overlay = panel.querySelector('.catalogue-x__overlay');
            const content = panel.querySelector('.catalogue-x__content');
            const meta = panel.querySelector('.catalogue-x__meta');
            const line = panel.querySelector('.catalogue-x__line');
            const heading = panel.querySelector('.catalogue-x__heading');
            const text = panel.querySelector('.catalogue-x__text');

            const revealTl = gsap.timeline({
              scrollTrigger: {
                trigger: panel,
                containerAnimation: horizontalTween,
                start: 'left 82%',
                end: 'left 38%',
                scrub: 1,
              },
            });

            revealTl
              .to(
                bgWord,
                {
                  opacity: 1,
                  x: 0,
                  y: 0,
                  rotate: 0,
                  scale: 1,
                  ease: 'power3.out',
                },
                0
              )
              .to(
                imageWrap,
                {
                  clipPath: 'inset(0% 0% 0% 0% round 0px)',
                  ease: 'none',
                },
                0
              )
              .to(
                image,
                {
                  scale: 1,
                  xPercent: 0,
                  ease: 'none',
                },
                0
              )
              .to(
                overlay,
                {
                  opacity: 1,
                  ease: 'none',
                },
                0
              )
              .to(
                content,
                {
                  opacity: 1,
                  y: 0,
                  rotateX: 0,
                  scale: 1,
                  ease: 'power3.out',
                },
                0.1
              )
              .to(
                meta,
                {
                  opacity: 1,
                  y: 0,
                  ease: 'power3.out',
                },
                0.16
              )
              .to(
                line,
                {
                  scaleX: 1,
                  ease: 'power3.out',
                },
                0.18
              )
              .to(
                heading,
                {
                  opacity: 1,
                  y: 0,
                  ease: 'power3.out',
                },
                0.22
              )
              .to(
                text,
                {
                  opacity: 1,
                  y: 0,
                  ease: 'power3.out',
                },
                0.28
              );

            ScrollTrigger.create({
              trigger: panel,
              containerAnimation: horizontalTween,
              start: 'left center',
              end: 'right center',
              onToggle: (self) => {
                panel.classList.toggle('is-active', self.isActive);
              },
            });

            gsap.to(bgWord, {
              x: 60,
              yPercent: -8,
              ease: 'none',
              scrollTrigger: {
                trigger: panel,
                containerAnimation: horizontalTween,
                start: 'left right',
                end: 'right left',
                scrub: 1.2,
              },
            });

            gsap.to(image, {
              xPercent: -8,
              yPercent: -3,
              ease: 'none',
              scrollTrigger: {
                trigger: panel,
                containerAnimation: horizontalTween,
                start: 'left right',
                end: 'right left',
                scrub: 1.5,
              },
            });

            gsap.to(content, {
              x: index % 2 === 0 ? 12 : -12,
              yPercent: -6,
              ease: 'none',
              scrollTrigger: {
                trigger: panel,
                containerAnimation: horizontalTween,
                start: 'left right',
                end: 'right left',
                scrub: 1.1,
              },
            });

            gsap.to(overlay, {
              opacity: 0.84,
              ease: 'none',
              scrollTrigger: {
                trigger: panel,
                containerAnimation: horizontalTween,
                start: 'left center',
                end: 'center center',
                scrub: 1,
              },
            });
          });
        });

        mm.add('(max-width: 768px)', () => {
          gsap.set(cataloguePanels, { opacity: 1 });

          cataloguePanels.forEach((panel) => {
            const bgWord = panel.querySelector('.catalogue-x__panel-bg-word');
            const image = panel.querySelector('.catalogue-x__image');
            const content = panel.querySelector('.catalogue-x__content');
            const meta = panel.querySelector('.catalogue-x__meta');
            const line = panel.querySelector('.catalogue-x__line');
            const heading = panel.querySelector('.catalogue-x__heading');
            const text = panel.querySelector('.catalogue-x__text');

            gsap.set(bgWord, { opacity: 0, y: 24 });
            gsap.set(image, { scale: 1.12, yPercent: 4 });
            gsap.set(content, { opacity: 0, y: 24 });
            gsap.set([meta, heading, text], { opacity: 0, y: 18 });
            gsap.set(line, { scaleX: 0 });

            const tl = gsap.timeline({
              scrollTrigger: {
                trigger: panel,
                start: 'top 85%',
                end: 'top 40%',
                scrub: 0.9,
              },
            });

            tl.to(
              bgWord,
              {
                opacity: 1,
                y: 0,
                ease: 'power2.out',
              },
              0
            )
              .to(
                image,
                {
                  scale: 1,
                  yPercent: 0,
                  ease: 'none',
                },
                0
              )
              .to(
                content,
                {
                  opacity: 1,
                  y: 0,
                  ease: 'power2.out',
                },
                0.1
              )
              .to(
                meta,
                {
                  opacity: 1,
                  y: 0,
                  ease: 'power2.out',
                },
                0.14
              )
              .to(
                line,
                {
                  scaleX: 1,
                  ease: 'power2.out',
                },
                0.16
              )
              .to(
                heading,
                {
                  opacity: 1,
                  y: 0,
                  ease: 'power2.out',
                },
                0.2
              )
              .to(
                text,
                {
                  opacity: 1,
                  y: 0,
                  ease: 'power2.out',
                },
                0.24
              );

            gsap.to(image, {
              yPercent: -6,
              ease: 'none',
              scrollTrigger: {
                trigger: panel,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1,
              },
            });

            gsap.to(bgWord, {
              yPercent: -12,
              ease: 'none',
              scrollTrigger: {
                trigger: panel,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 0.8,
              },
            });

            gsap.to(content, {
              yPercent: -4,
              ease: 'none',
              scrollTrigger: {
                trigger: panel,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 0.8,
              },
            });

            ScrollTrigger.create({
              trigger: panel,
              start: 'top 55%',
              end: 'bottom 55%',
              onToggle: (self) => {
                panel.classList.toggle('is-active', self.isActive);
              },
            });
          });
        });
      }


/* =========================
   AGRI CINEMA SECTION
========================= */
const cinemaMM = gsap.matchMedia();

gsap.set(
  [
    '.agri-cinema__eyebrow',
    '.agri-cinema__title',
    '.agri-cinema__subtitle',
    '.agri-cinema__step',
    '.agri-cinema__micro',
  ],
  {
    opacity: 0,
    y: 36,
  }
);

gsap.set('.agri-cinema__scene-shell', {
  opacity: 0,
  y: 100,
  scale: 0.92,
  rotateX: -8,
  transformPerspective: 1800,
  filter: 'blur(8px)',
});

gsap.set('.agri-cinema__axis--v', {
  opacity: 0,
  scaleY: 0,
  transformOrigin: 'center top',
});

gsap.set('.agri-cinema__axis--h', {
  opacity: 0,
  scaleX: 0,
  transformOrigin: 'left center',
});

gsap
  .timeline({
    scrollTrigger: {
      trigger: '.agri-cinema__intro',
      start: 'top 84%',
    },
  })
  .to('.agri-cinema__eyebrow', {
    opacity: 1,
    y: 0,
    duration: 0.7,
    ease: 'power3.out',
  })
  .to(
    '.agri-cinema__title',
    {
      opacity: 1,
      y: 0,
      duration: 0.95,
      ease: 'power4.out',
    },
    '-=0.35'
  )
  .to(
    '.agri-cinema__subtitle',
    {
      opacity: 1,
      y: 0,
      duration: 0.85,
      ease: 'power3.out',
    },
    '-=0.45'
  );

cinemaMM.add('(min-width: 1024px)', () => {
  const storyTl = gsap.timeline({
    scrollTrigger: {
      trigger: '.agri-cinema__story',
      start: 'top top',
      end: '+=220%',
      pin: '.agri-cinema__sticky',
      scrub: 1.05,
      anticipatePin: 1,
      invalidateOnRefresh: true,
    },
  });

  storyTl
    .to(
      '.agri-cinema__axis--v',
      {
        opacity: 1,
        scaleY: 1,
        duration: 0.8,
        ease: 'power3.out',
      },
      0.05
    )
    .to(
      '.agri-cinema__axis--h',
      {
        opacity: 1,
        scaleX: 1,
        duration: 0.8,
        ease: 'power3.out',
      },
      0.1
    )
    .to(
      '.agri-cinema__scene-shell',
      {
        opacity: 1,
        y: 0,
        scale: 1,
        rotateX: 0,
        filter: 'blur(0px)',
        duration: 1,
        ease: 'power4.out',
      },
      0.14
    )
    .to(
      '.agri-cinema__step--one',
      {
        opacity: 1,
        y: 0,
        duration: 0.65,
        ease: 'power3.out',
      },
      0.22
    )
    .to(
      '.agri-cinema__micro--top',
      {
        opacity: 1,
        y: 0,
        duration: 0.55,
        ease: 'power3.out',
      },
      0.26
    )
    .to(
      '.agri-cinema__step--one',
      {
        opacity: 0.22,
        y: -16,
        duration: 0.6,
        ease: 'power2.out',
      },
      0.42
    )
    .to(
      '.agri-cinema__step--two',
      {
        opacity: 1,
        y: 0,
        duration: 0.65,
        ease: 'power3.out',
      },
      0.46
    )
    .to(
      '.agri-cinema__step--two',
      {
        opacity: 0.22,
        y: -16,
        duration: 0.6,
        ease: 'power2.out',
      },
      0.67
    )
    .to(
      '.agri-cinema__step--three',
      {
        opacity: 1,
        y: 0,
        duration: 0.65,
        ease: 'power3.out',
      },
      0.72
    )
    .to(
      '.agri-cinema__micro--bottom',
      {
        opacity: 1,
        y: 0,
        duration: 0.55,
        ease: 'power3.out',
      },
      0.78
    );

  gsap.to('.agri-cinema__scene-shell', {
    yPercent: -6,
    rotateY: 5,
    ease: 'none',
    scrollTrigger: {
      trigger: '.agri-cinema',
      start: 'top bottom',
      end: 'bottom top',
      scrub: 1,
      invalidateOnRefresh: true,
    },
  });

  gsap.to('.agri-cinema__scene-card', {
    yPercent: -2,
    scale: 1.015,
    ease: 'none',
    scrollTrigger: {
      trigger: '.agri-cinema',
      start: 'top bottom',
      end: 'bottom top',
      scrub: 1,
      invalidateOnRefresh: true,
    },
  });

  gsap.to('.agri-cinema__radial--one', {
    x: 55,
    y: 35,
    ease: 'none',
    scrollTrigger: {
      trigger: '.agri-cinema',
      start: 'top bottom',
      end: 'bottom top',
      scrub: 1.25,
      invalidateOnRefresh: true,
    },
  });

  gsap.to('.agri-cinema__radial--two', {
    x: -45,
    y: -28,
    ease: 'none',
    scrollTrigger: {
      trigger: '.agri-cinema',
      start: 'top bottom',
      end: 'bottom top',
      scrub: 1.2,
      invalidateOnRefresh: true,
    },
  });
});

cinemaMM.add('(max-width: 1023px)', () => {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: '.agri-cinema__visual-col',
        start: 'top 84%',
      },
    })
    .to(
      '.agri-cinema__axis--v',
      {
        opacity: 1,
        scaleY: 1,
        duration: 0.7,
        ease: 'power3.out',
      },
      0
    )
    .to(
      '.agri-cinema__axis--h',
      {
        opacity: 1,
        scaleX: 1,
        duration: 0.7,
        ease: 'power3.out',
      },
      0.05
    )
    .to(
      '.agri-cinema__scene-shell',
      {
        opacity: 1,
        y: 0,
        scale: 1,
        rotateX: 0,
        filter: 'blur(0px)',
        duration: 0.9,
        ease: 'power3.out',
      },
      0.1
    );

  gsap.to('.agri-cinema__step, .agri-cinema__micro', {
    opacity: 1,
    y: 0,
    duration: 0.75,
    stagger: 0.08,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.agri-cinema__content-col',
      start: 'top 88%',
    },
  });

  gsap.to('.agri-cinema__scene-shell', {
    yPercent: -3,
    ease: 'none',
    scrollTrigger: {
      trigger: '.agri-cinema',
      start: 'top bottom',
      end: 'bottom top',
      scrub: 1,
      invalidateOnRefresh: true,
    },
  });
});

/* =========================
   IMMERSIVE SEQUENCE
========================= */
const seqMM = gsap.matchMedia();
const seqItems = gsap.utils.toArray('.immersive-sequence__item');
const seqTexts = gsap.utils.toArray('.immersive-sequence__text-card');

gsap.set(
  [
    '.immersive-sequence__eyebrow',
    '.immersive-sequence__title',
    '.immersive-sequence__subtitle',
  ],
  { opacity: 0, y: 40 }
);

gsap
  .timeline({
    scrollTrigger: {
      trigger: '.immersive-sequence__intro',
      start: 'top 84%',
    },
  })
  .to('.immersive-sequence__eyebrow', {
    opacity: 1,
    y: 0,
    duration: 0.7,
    ease: 'power3.out',
  })
  .to(
    '.immersive-sequence__title',
    {
      opacity: 1,
      y: 0,
      duration: 0.9,
      ease: 'power4.out',
    },
    '-=0.35'
  )
  .to(
    '.immersive-sequence__subtitle',
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power3.out',
    },
    '-=0.45'
  );

seqMM.add('(min-width: 969px)', () => {
  seqItems.forEach((item, index) => {
    const wrap = item.querySelector('.immersive-sequence__image-wrap');
    const img = item.querySelector('img');
    const text = seqTexts[index];

    if (index === 0) {
      gsap.set(wrap, { clipPath: 'inset(0% 0% 0% 0% round 30px)' });
      gsap.set(img, { scale: 1.02, yPercent: 0 });
      gsap.set(text, { opacity: 1, y: 0 });
    } else {
      gsap.set(wrap, { clipPath: 'inset(100% 0% 0% 0% round 30px)' });
      gsap.set(img, { scale: 1.14, yPercent: 8 });
      gsap.set(text, { opacity: 0, y: 50 });
    }
  });

  const seqTl = gsap.timeline({
    scrollTrigger: {
      trigger: '.immersive-sequence__story',
      start: 'top top',
      end: '+=500%',
      scrub: 1,
      pin: '.immersive-sequence__pin',
      pinSpacing: true,
      anticipatePin: 1,
      invalidateOnRefresh: true,
    },
  });

  seqTl.to('.immersive-sequence__progress-fill', {
    width: '100%',
    ease: 'none',
    duration: 6,
  });

  for (let i = 1; i < seqItems.length; i++) {
    const currentItem = seqItems[i];
    const currentWrap = currentItem.querySelector('.immersive-sequence__image-wrap');
    const currentImg = currentItem.querySelector('img');
    const prevText = seqTexts[i - 1];
    const currentText = seqTexts[i];

    seqTl
      .to(
        prevText,
        {
          opacity: 0,
          y: -32,
          ease: 'power2.out',
          duration: 0.35,
        },
        i
      )
      .to(
        currentWrap,
        {
          clipPath: 'inset(0% 0% 0% 0% round 30px)',
          ease: 'none',
          duration: 0.7,
        },
        i + 0.05
      )
      .to(
        currentImg,
        {
          scale: 1,
          yPercent: 0,
          ease: 'none',
          duration: 0.7,
        },
        i + 0.05
      )
      .to(
        currentText,
        {
          opacity: 1,
          y: 0,
          ease: 'power3.out',
          duration: 0.4,
        },
        i + 0.25
      );
  }
});

seqMM.add('(max-width: 968px)', () => {
  seqItems.forEach((item, index) => {
    const wrap = item.querySelector('.immersive-sequence__image-wrap');
    const img = item.querySelector('img');
    const text = seqTexts[index];

    if (index === 0) {
      gsap.set(wrap, { clipPath: 'inset(0% 0% 0% 0% round 0px)' });
      gsap.set(img, { scale: 1.02, yPercent: 0 });
      gsap.set(text, { opacity: 1, y: 0 });
    } else {
      gsap.set(wrap, { clipPath: 'inset(100% 0% 0% 0% round 0px)' });
      gsap.set(img, { scale: 1.12, yPercent: 8 });
      gsap.set(text, { opacity: 0, y: 36 });
    }
  });

  const seqTlMobile = gsap.timeline({
    scrollTrigger: {
      trigger: '.immersive-sequence__story',
      start: 'top top',
      end: '+=420%',
      scrub: 1,
      pin: '.immersive-sequence__pin',
      pinSpacing: true,
      anticipatePin: 1,
      invalidateOnRefresh: true,
    },
  });

  seqTlMobile.to('.immersive-sequence__progress-fill', {
    width: '100%',
    ease: 'none',
    duration: 6,
  });

  for (let i = 1; i < seqItems.length; i++) {
    const currentItem = seqItems[i];
    const currentWrap = currentItem.querySelector('.immersive-sequence__image-wrap');
    const currentImg = currentItem.querySelector('img');
    const prevText = seqTexts[i - 1];
    const currentText = seqTexts[i];

    seqTlMobile
      .to(
        prevText,
        {
          opacity: 0,
          y: -16,
          ease: 'power2.out',
          duration: 0.22,
        },
        i
      )
      .to(
        currentWrap,
        {
          clipPath: 'inset(0% 0% 0% 0% round 0px)',
          ease: 'none',
          duration: 0.62,
        },
        i + 0.04
      )
      .to(
        currentImg,
        {
          scale: 1,
          yPercent: 0,
          ease: 'none',
          duration: 0.62,
        },
        i + 0.04
      )
      .to(
        currentText,
        {
          opacity: 1,
          y: 0,
          ease: 'power3.out',
          duration: 0.28,
        },
        i + 0.16
      );
  }
});
/* =========================
   RESEARCH LAB
========================= */
const researchMM = gsap.matchMedia();

gsap.set(
  [
    '.research-lab__eyebrow',
    '.research-lab__title',
    '.research-lab__subtitle',
  ],
  {
    opacity: 0,
    y: 40,
  }
);

gsap.set('.research-lab__line-fill', {
  scaleY: 0,
  transformOrigin: 'top center',
});

gsap
  .timeline({
    scrollTrigger: {
      trigger: '.research-lab__intro',
      start: 'top 84%',
    },
  })
  .to('.research-lab__eyebrow', {
    opacity: 1,
    y: 0,
    duration: 0.7,
    ease: 'power3.out',
  })
  .to(
    '.research-lab__title',
    {
      opacity: 1,
      y: 0,
      duration: 0.9,
      ease: 'power4.out',
    },
    '-=0.35'
  )
  .to(
    '.research-lab__subtitle',
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power3.out',
    },
    '-=0.45'
  );

gsap.to('.research-lab__line-fill', {
  scaleY: 1,
  ease: 'none',
  scrollTrigger: {
    trigger: '.research-lab__timeline',
    start: 'top 75%',
    end: 'bottom 78%',
    scrub: 1,
  },
});

researchMM.add('(min-width: 969px)', () => {
  document.querySelectorAll('.research-lab__step').forEach((step) => {
    const media = step.querySelector('.research-lab__media');
    const image = step.querySelector('.research-lab__media img');
    const content = step.querySelector('.research-lab__content');
    const badge = step.querySelector('.research-lab__badge');
    const title = step.querySelector('h3');
    const text = step.querySelector('p');
    const dot = step.querySelector('.research-lab__dot');

    gsap.set(media, {
      opacity: 0,
      y: 70,
      clipPath: 'inset(12% 8% 12% 8% round 28px)',
    });

    gsap.set(image, {
      scale: 1.14,
      y: 30,
    });

    gsap.set(content, {
      opacity: 0,
      y: 60,
    });

    gsap.set([badge, title, text], {
      opacity: 0,
      y: 26,
    });

    gsap.set(dot, {
      opacity: 0,
      scale: 0,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: step,
        start: 'top 76%',
        end: 'top 38%',
        scrub: 1,
      },
    });

    tl.to(
      dot,
      {
        opacity: 1,
        scale: 1,
        ease: 'power3.out',
      },
      0
    )
      .to(
        media,
        {
          opacity: 1,
          y: 0,
          clipPath: 'inset(0% 0% 0% 0% round 28px)',
          ease: 'power3.out',
        },
        0.05
      )
      .to(
        image,
        {
          scale: 1,
          y: 0,
          ease: 'none',
        },
        0.05
      )
      .to(
        content,
        {
          opacity: 1,
          y: 0,
          ease: 'power3.out',
        },
        0.12
      )
      .to(
        badge,
        {
          opacity: 1,
          y: 0,
          ease: 'power3.out',
        },
        0.18
      )
      .to(
        title,
        {
          opacity: 1,
          y: 0,
          ease: 'power3.out',
        },
        0.22
      )
      .to(
        text,
        {
          opacity: 1,
          y: 0,
          ease: 'power3.out',
        },
        0.27
      );

    gsap.to(image, {
      yPercent: -7,
      ease: 'none',
      scrollTrigger: {
        trigger: step,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1.1,
      },
    });

    gsap.to(content, {
      yPercent: -4,
      ease: 'none',
      scrollTrigger: {
        trigger: step,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 0.9,
      },
    });
  });
});

researchMM.add('(max-width: 968px)', () => {
  document.querySelectorAll('.research-lab__step').forEach((step) => {
    const media = step.querySelector('.research-lab__media');
    const image = step.querySelector('.research-lab__media img');
    const content = step.querySelector('.research-lab__content');
    const badge = step.querySelector('.research-lab__badge');
    const title = step.querySelector('h3');
    const text = step.querySelector('p');
    const dot = step.querySelector('.research-lab__dot');

    gsap.set(media, {
      opacity: 0,
      y: 26,
      clipPath: 'inset(10% 0% 0% 0% round 22px)',
    });

    gsap.set(image, {
      scale: 1.08,
      yPercent: 4,
    });

    gsap.set(content, {
      opacity: 0,
      y: 20,
    });

    gsap.set([badge, title, text], {
      opacity: 0,
      y: 16,
    });

    gsap.set(dot, {
      opacity: 0,
      scale: 0,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: step,
        start: 'top 88%',
        end: 'top 46%',
        scrub: 0.9,
      },
    });

    tl.to(
      dot,
      {
        opacity: 1,
        scale: 1,
        ease: 'power3.out',
      },
      0
    )
      .to(
        media,
        {
          opacity: 1,
          y: 0,
          clipPath: 'inset(0% 0% 0% 0% round 22px)',
          ease: 'power3.out',
        },
        0.04
      )
      .to(
        image,
        {
          scale: 1,
          yPercent: 0,
          ease: 'none',
        },
        0.04
      )
      .to(
        content,
        {
          opacity: 1,
          y: 0,
          ease: 'power3.out',
        },
        0.1
      )
      .to(
        badge,
        {
          opacity: 1,
          y: 0,
          ease: 'power3.out',
        },
        0.14
      )
      .to(
        title,
        {
          opacity: 1,
          y: 0,
          ease: 'power3.out',
        },
        0.18
      )
      .to(
        text,
        {
          opacity: 1,
          y: 0,
          ease: 'power3.out',
        },
        0.22
      );
  });
});

/* =========================
   BLOG REVEAL
========================= */
const blogMM = gsap.matchMedia();
const blogItems = gsap.utils.toArray('.blog-reveal__item');

gsap.set(
  [
    '.blog-reveal__eyebrow',
    '.blog-reveal__title',
    '.blog-reveal__subtitle',
  ],
  {
    opacity: 0,
    y: 40,
  }
);

gsap
  .timeline({
    scrollTrigger: {
      trigger: '.blog-reveal__intro',
      start: 'top 84%',
    },
  })
  .to('.blog-reveal__eyebrow', {
    opacity: 1,
    y: 0,
    duration: 0.7,
    ease: 'power3.out',
  })
  .to(
    '.blog-reveal__title',
    {
      opacity: 1,
      y: 0,
      duration: 0.9,
      ease: 'power4.out',
    },
    '-=0.35'
  )
  .to(
    '.blog-reveal__subtitle',
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power3.out',
    },
    '-=0.45'
  );

blogMM.add('(min-width: 969px)', () => {
  blogItems.forEach((item, index) => {
    const wrap = item.querySelector('.blog-reveal__image-wrap');
    const image = item.querySelector('img');
    const content = item.querySelector('.blog-reveal__content');
    const meta = item.querySelector('.blog-reveal__meta');
    const title = item.querySelector('h3');
    const text = item.querySelector('p');

    if (index === 0) {
      gsap.set(item, { opacity: 1 });
      gsap.set(wrap, { clipPath: 'inset(0% 0% 0% 0% round 0px)' });
      gsap.set(image, { scale: 1.02, yPercent: 0 });
      gsap.set(content, { opacity: 1, y: 0 });
      gsap.set([meta, title, text], { opacity: 1, y: 0 });
    } else {
      gsap.set(item, { opacity: 1 });
      gsap.set(wrap, { clipPath: 'inset(100% 0% 0% 0% round 0px)' });
      gsap.set(image, { scale: 1.14, yPercent: 8 });
      gsap.set(content, { opacity: 0, y: 60 });
      gsap.set([meta, title, text], { opacity: 0, y: 24 });
    }
  });

  const blogTl = gsap.timeline({
    scrollTrigger: {
      trigger: '.blog-reveal__story',
      start: 'top top',
      end: '+=600%',
      scrub: 1,
      pin: '.blog-reveal__pin',
      pinSpacing: true,
      anticipatePin: 1,
      invalidateOnRefresh: true,
    },
  });

  blogTl.to('.blog-reveal__progress-fill', {
    width: '100%',
    ease: 'none',
    duration: 6,
  });

  for (let i = 1; i < blogItems.length; i++) {
    const prevItem = blogItems[i - 1];
    const nextItem = blogItems[i];

    const prevContent = prevItem.querySelector('.blog-reveal__content');
    const nextWrap = nextItem.querySelector('.blog-reveal__image-wrap');
    const nextImg = nextItem.querySelector('img');
    const nextContent = nextItem.querySelector('.blog-reveal__content');
    const nextMeta = nextItem.querySelector('.blog-reveal__meta');
    const nextTitle = nextItem.querySelector('h3');
    const nextText = nextItem.querySelector('p');

    blogTl
      .to(
        prevContent,
        {
          opacity: 0,
          y: -30,
          ease: 'power2.out',
          duration: 0.28,
        },
        i
      )
      .to(
        nextWrap,
        {
          clipPath: 'inset(0% 0% 0% 0% round 0px)',
          ease: 'none',
          duration: 0.7,
        },
        i + 0.03
      )
      .to(
        nextImg,
        {
          scale: 1,
          yPercent: 0,
          ease: 'none',
          duration: 0.7,
        },
        i + 0.03
      )
      .to(
        nextContent,
        {
          opacity: 1,
          y: 0,
          ease: 'power3.out',
          duration: 0.34,
        },
        i + 0.16
      )
      .to(
        [nextMeta, nextTitle, nextText],
        {
          opacity: 1,
          y: 0,
          stagger: 0.04,
          ease: 'power3.out',
          duration: 0.26,
        },
        i + 0.2
      );
  }
});

blogMM.add('(max-width: 968px)', () => {
  blogItems.forEach((item, index) => {
    const wrap = item.querySelector('.blog-reveal__image-wrap');
    const image = item.querySelector('img');
    const content = item.querySelector('.blog-reveal__content');
    const meta = item.querySelector('.blog-reveal__meta');
    const title = item.querySelector('h3');
    const text = item.querySelector('p');

    if (index === 0) {
      gsap.set(wrap, { clipPath: 'inset(0% 0% 0% 0% round 0px)' });
      gsap.set(image, { scale: 1.02, yPercent: 0 });
      gsap.set(content, { opacity: 1, y: 0 });
      gsap.set([meta, title, text], { opacity: 1, y: 0 });
    } else {
      gsap.set(wrap, { clipPath: 'inset(100% 0% 0% 0% round 0px)' });
      gsap.set(image, { scale: 1.1, yPercent: 5 });
      gsap.set(content, { opacity: 0, y: 32 });
      gsap.set([meta, title, text], { opacity: 0, y: 18 });
    }
  });

  const blogTlMobile = gsap.timeline({
    scrollTrigger: {
      trigger: '.blog-reveal__story',
      start: 'top top',
      end: '+=420%',
      scrub: 0.9,
      pin: '.blog-reveal__pin',
      pinSpacing: true,
      anticipatePin: 1,
      invalidateOnRefresh: true,
    },
  });

  blogTlMobile.to('.blog-reveal__progress-fill', {
    width: '100%',
    ease: 'none',
    duration: 6,
  });

  for (let i = 1; i < blogItems.length; i++) {
    const prevItem = blogItems[i - 1];
    const nextItem = blogItems[i];

    const prevContent = prevItem.querySelector('.blog-reveal__content');
    const nextWrap = nextItem.querySelector('.blog-reveal__image-wrap');
    const nextImg = nextItem.querySelector('img');
    const nextContent = nextItem.querySelector('.blog-reveal__content');
    const nextMeta = nextItem.querySelector('.blog-reveal__meta');
    const nextTitle = nextItem.querySelector('h3');
    const nextText = nextItem.querySelector('p');

    blogTlMobile
      .to(
        prevContent,
        {
          opacity: 0,
          y: -16,
          ease: 'power2.out',
          duration: 0.22,
        },
        i
      )
      .to(
        nextWrap,
        {
          clipPath: 'inset(0% 0% 0% 0% round 0px)',
          ease: 'none',
          duration: 0.58,
        },
        i + 0.04
      )
      .to(
        nextImg,
        {
          scale: 1,
          yPercent: 0,
          ease: 'none',
          duration: 0.58,
        },
        i + 0.04
      )
      .to(
        nextContent,
        {
          opacity: 1,
          y: 0,
          ease: 'power3.out',
          duration: 0.24,
        },
        i + 0.16
      )
      .to(
        [nextMeta, nextTitle, nextText],
        {
          opacity: 1,
          y: 0,
          stagger: 0.03,
          ease: 'power3.out',
          duration: 0.22,
        },
        i + 0.18
      );
  }
});
/* =========================
   REVIEWS SHOWCASE
========================= */
const reviewsMM = gsap.matchMedia();
const reviewMain = gsap.utils.toArray('.reviews-showcase__main-content');

gsap.set(
  [
    '.reviews-showcase__eyebrow',
    '.reviews-showcase__title',
    '.reviews-showcase__subtitle',
  ],
  {
    opacity: 0,
    y: 40,
  }
);

gsap
  .timeline({
    scrollTrigger: {
      trigger: '.reviews-showcase__intro',
      start: 'top 84%',
    },
  })
  .to('.reviews-showcase__eyebrow', {
    opacity: 1,
    y: 0,
    duration: 0.7,
    ease: 'power3.out',
  })
  .to(
    '.reviews-showcase__title',
    {
      opacity: 1,
      y: 0,
      duration: 0.9,
      ease: 'power4.out',
    },
    '-=0.35'
  )
  .to(
    '.reviews-showcase__subtitle',
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power3.out',
    },
    '-=0.45'
  );

reviewsMM.add('(min-width: 969px)', () => {
  gsap.set('.reviews-showcase__frame', {
    opacity: 0,
    y: 70,
    scale: 0.96,
    rotateX: -8,
    transformPerspective: 1400,
  });

  gsap.set('.reviews-showcase__quote-icon', {
    opacity: 0,
    scale: 0.72,
    rotate: -10,
  });

  gsap.set('.reviews-showcase__counter', {
    opacity: 0,
    y: 16,
  });

  reviewMain.forEach((item, index) => {
    if (index === 0) {
      gsap.set(item, { opacity: 1, y: 0 });
    } else {
      gsap.set(item, { opacity: 0, y: 24 });
    }
  });

  gsap
    .timeline({
      scrollTrigger: {
        trigger: '.reviews-showcase__story',
        start: 'top 78%',
      },
    })
    .to('.reviews-showcase__frame', {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      duration: 0.9,
      ease: 'power4.out',
    })
    .to(
      '.reviews-showcase__quote-icon',
      {
        opacity: 1,
        scale: 1,
        rotate: 0,
        duration: 0.55,
        ease: 'power3.out',
      },
      0.14
    )
    .to(
      '.reviews-showcase__counter',
      {
        opacity: 1,
        y: 0,
        duration: 0.45,
        ease: 'power3.out',
      },
      0.18
    );

  const reviewNumbers = ['01', '02', '03', '04', '05', '06'];

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.reviews-showcase__story',
      start: 'top top',
      end: '+=420%',
      scrub: 1,
      pin: '.reviews-showcase__pin',
      pinSpacing: true,
      anticipatePin: 1,
      invalidateOnRefresh: true,
      onUpdate: (self) => {
        const el = document.querySelector('.reviews-showcase__counter-current');
        if (!el) return;

        const progress = self.progress;
        const total = reviewMain.length;
        const index = Math.min(total - 1, Math.floor(progress * total));

        el.textContent = reviewNumbers[index];
      },
    },
  });

  tl.to('.reviews-showcase__progress-fill', {
    width: '100%',
    ease: 'none',
    duration: 6,
  });

  for (let i = 1; i < reviewMain.length; i++) {
    tl.to(
      reviewMain[i - 1],
      {
        opacity: 0,
        y: -18,
        ease: 'power2.out',
        duration: 0.2,
      },
      i
    ).to(
      reviewMain[i],
      {
        opacity: 1,
        y: 0,
        ease: 'power3.out',
        duration: 0.28,
      },
      i + 0.14
    );
  }
});

reviewsMM.add('(max-width: 968px)', () => {
  gsap.set('.reviews-showcase__frame', {
    opacity: 0,
    y: 26,
  });

  gsap.set('.reviews-showcase__quote-icon', {
    opacity: 0,
    scale: 0.8,
  });

  gsap.set('.reviews-showcase__counter', {
    opacity: 0,
    y: 12,
  });

  reviewMain.forEach((item, index) => {
    if (index === 0) {
      gsap.set(item, { opacity: 1, y: 0 });
    } else {
      gsap.set(item, { opacity: 0, y: 14 });
    }
  });

  gsap
    .timeline({
      scrollTrigger: {
        trigger: '.reviews-showcase__story',
        start: 'top 84%',
      },
    })
    .to('.reviews-showcase__frame', {
      opacity: 1,
      y: 0,
      duration: 0.65,
      ease: 'power3.out',
    })
    .to(
      '.reviews-showcase__quote-icon',
      {
        opacity: 1,
        scale: 1,
        duration: 0.35,
        ease: 'power3.out',
      },
      0.08
    )
    .to(
      '.reviews-showcase__counter',
      {
        opacity: 1,
        y: 0,
        duration: 0.32,
        ease: 'power3.out',
      },
      0.12
    );

  const reviewNumbers = ['01', '02', '03', '04', '05', '06'];

  const tlMobile = gsap.timeline({
    scrollTrigger: {
      trigger: '.reviews-showcase__story',
      start: 'top top',
      end: '+=520%',
      scrub: 0.9,
      pin: '.reviews-showcase__pin',
      pinSpacing: true,
      anticipatePin: 1,
      invalidateOnRefresh: true,
      onUpdate: (self) => {
        const el = document.querySelector('.reviews-showcase__counter-current');
        if (!el) return;

        const progress = self.progress;
        const total = reviewMain.length;
        const index = Math.min(total - 1, Math.floor(progress * total));

        el.textContent = reviewNumbers[index];
      },
    },
  });

  tlMobile.to('.reviews-showcase__progress-fill', {
    width: '100%',
    ease: 'none',
    duration: 6,
  });

  for (let i = 1; i < reviewMain.length; i++) {
    tlMobile
      .to(
        reviewMain[i - 1],
        {
          opacity: 0,
          y: -10,
          ease: 'power2.out',
          duration: 0.16,
        },
        i
      )
      .to(
        reviewMain[i],
        {
          opacity: 1,
          y: 0,
          ease: 'power3.out',
          duration: 0.18,
        },
        i + 0.12
      );
  }
});



      window.addEventListener('load', onRefresh);
      window.addEventListener('resize', onRefresh);
    }, homeRef);

    return () => {
      window.removeEventListener('load', onRefresh);
      window.removeEventListener('resize', onRefresh);
      ctx.revert();
    };
  }, []);

  return (
    <main ref={homeRef} className="home-page">
      <section className="hero">
        <div className="hero__media">
          <div className="hero__visual">
            <img src="hero.jpg" alt="Hero agricole" className="hero__image" />
            <div className="hero__overlay"></div>

            <div className="hero__content">
              <p className="hero__eyebrow">L'exigence agricole, au service de votre activité</p>

              <h1 className="hero__title">
                Votre partenaire agricole,
                <br />
                au <span className="hero__title-accent">quotidien.</span>
              </h1>

              <a href="#" className="quote-btn quote-btn--light" aria-label="Demandez un devis">
                <span className="quote-btn__icon-wrap" aria-hidden="true">
                  <img src="flower.png" alt="" className="quote-btn__icon" />
                </span>
                <span className="quote-btn__text">Demandez un devis</span>
              </a>
            </div>
          </div>

          <div className="hero__features">
            <article className="hero__feature hero__feature--dark hero__feature--standard hero__feature--first">
              <div className="hero__feature-icon">
                <img src="qualité icon.png" alt="" />
              </div>
              <div className="hero__feature-text">
                <h3>Qualité & efficacité prouvées sur le terrain</h3>
                <p>
                  Produits testés en conditions réelles (différents sols/climats), avec une
                  performance mesurable : rendement, vigueur, résistance, régularité des résultats.
                </p>
              </div>
            </article>

            <article className="hero__feature hero__feature--dark-alt hero__feature--standard">
              <div className="hero__feature-icon">
                <img src="innovation icon.png" alt="" />
              </div>
              <div className="hero__feature-text">
                <h3>Innovation & expertise agronomique</h3>
                <p>
                  Une équipe technique (ingénieurs/agronomes) qui conçoit et améliore en continu
                  les formulations, en s'appuyant sur la recherche, les retours terrain et des
                  protocoles de contrôle.
                </p>
              </div>
            </article>

            <article className="hero__feature hero__feature--dark hero__feature--standard hero__feature--second-row-left">
              <div className="hero__feature-icon">
                <img src="durable icon.png" alt="" />
              </div>
              <div className="hero__feature-text">
                <h3>Approche durable & conformité réglementaire</h3>
                <p>
                  Solutions orientées agriculture responsable : réduction d'intrants, respect de
                  l'environnement, traçabilité, et conformité aux normes locales/internationales.
                </p>
              </div>
            </article>

            <article className="hero__feature hero__feature--light hero__feature--highlight">
              <div className="hero__feature-media">
                <img src="image pepticide.png" alt="Illustration service" />
              </div>

              <div className="hero__feature-body">
                <div className="hero__feature-icon">
                  <img src="technnique icon.png" alt="" />
                </div>
                <div className="hero__feature-text">
                  <h3>Accompagnement technique & service après-vente terrain</h3>
                  <p>
                    Conseil avant vente, programmes de fertilisation/protection adaptés, suivi des
                    parcelles, formations et visites techniques pour maximiser les résultats chez
                    l'agriculteur.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="why-art" id="why-us">
        <div className="why-art__ambient why-art__ambient--one"></div>
        <div className="why-art__ambient why-art__ambient--two"></div>
        <div className="why-art__ambient why-art__ambient--three"></div>

        <div className="why-art__track">
          <div className="why-art__intro">
            <p className="why-art__eyebrow">Pourquoi nous choisir</p>
            <h2 className="why-art__title">
              Une expertise agricole au service de vos
              <span> résultats</span>
            </h2>
            <p className="why-art__subtitle">
              Nous accompagnons les professionnels du secteur avec des solutions fiables,
              performantes et pensées pour les réalités du terrain.
            </p>
          </div>

          <section className="why-art__panel why-art__panel--one">
            <div className="why-art__bg-word">EXPERTISE</div>
            <div className="why-art__line why-art__line--one"></div>

            <div className="why-art__media why-art__media--large">
              <img src="image 3.jpg" alt="Expertise terrain agricole" />
            </div>

            <div className="why-art__content">
              <div className="why-art__badge">01 - Expertise terrain</div>
              <h3>
                Une lecture <span>précise</span> du terrain
              </h3>
              <p>
                Une parfaite compréhension des besoins agricoles grâce à une approche concrète,
                proche des exploitations et des réalités du quotidien.
              </p>
            </div>

            <div className="why-art__floating why-art__floating--one">
              <strong>10+</strong>
              <span>Années d’expérience</span>
            </div>
          </section>

          <section className="why-art__panel why-art__panel--two">
            <div className="why-art__bg-word">PERFORMANCE</div>
            <div className="why-art__line why-art__line--two"></div>

            <div className="why-art__media why-art__media--left">
              <img src="image 1.jpg" alt="Produits agricoles performants" />
            </div>

            <div className="why-art__content why-art__content--right">
              <div className="why-art__badge">02 - Produits performants</div>
              <h3>
                Des solutions faites pour la <span>performance</span>
              </h3>
              <p>
                Des solutions sélectionnées et développées pour améliorer la vigueur, la régularité
                et le potentiel de rendement des cultures.
              </p>
            </div>

            <div className="why-art__floating why-art__floating--two">
              <strong>500+</strong>
              <span>Clients accompagnés</span>
            </div>
          </section>

          <section className="why-art__panel why-art__panel--three">
            <div className="why-art__bg-word">ACCOMPAGNEMENT</div>
            <div className="why-art__line why-art__line--three"></div>

            <div className="why-art__media why-art__media--wide">
              <img src="image 2.jpg" alt="Accompagnement agricole durable" />
            </div>

            <div className="why-art__content">
              <div className="why-art__badge">03 - Accompagnement durable</div>
              <h3>
                Un suivi technique <span>responsable</span>
              </h3>
              <p>
                Un suivi personnalisé avec conseils, recommandations et assistance pour maximiser
                l’efficacité de chaque programme appliqué.
              </p>
            </div>

            <div className="why-art__floating why-art__floating--three">
              <strong>98%</strong>
              <span>Satisfaction partenaire</span>
            </div>
          </section>
        </div>
      </section>

      <section className="catalogue-x" id="catalogue">
        <div className="catalogue-x__intro">
          <p className="catalogue-x__eyebrow">Catalogue</p>
          <h2 className="catalogue-x__title">
            Une gamme complète de solutions
            <span> agricoles</span>
          </h2>
          <p className="catalogue-x__subtitle">
            Découvrez nos catégories de produits conçues pour répondre avec précision aux besoins
            de nutrition, de stimulation et de performance de vos cultures.
          </p>
        </div>

        <div className="catalogue-x__pin">
          <div className="catalogue-x__track">
            <a href="biostimulants.html" className="catalogue-x__panel" aria-label="Voir la catégorie Biostimulants">
              <div className="catalogue-x__panel-bg-word">BIO</div>
              <div className="catalogue-x__image-wrap">
                <img src="image_cata1.jpg" alt="Biostimulants" className="catalogue-x__image" />
              </div>
              <div className="catalogue-x__overlay"></div>
              <div className="catalogue-x__content">
                <div className="catalogue-x__meta">
                  <span className="catalogue-x__index">01</span>
                  <span className="catalogue-x__line"></span>
                  <span className="catalogue-x__label">Catalogue</span>
                </div>
                <h3 className="catalogue-x__heading">Biostimulants</h3>
                <p className="catalogue-x__text">
                  Des solutions conçues pour stimuler les mécanismes naturels des plantes et
                  améliorer leur vigueur, leur résistance et leur équilibre.
                </p>
              </div>
            </a>

            <a href="engrais-speciaux.html" className="catalogue-x__panel" aria-label="Voir la catégorie Engrais spéciaux">
              <div className="catalogue-x__panel-bg-word">SPÉCIAL</div>
              <div className="catalogue-x__image-wrap">
                <img src="image 2.jpg" alt="Engrais spéciaux" className="catalogue-x__image" />
              </div>
              <div className="catalogue-x__overlay"></div>
              <div className="catalogue-x__content">
                <div className="catalogue-x__meta">
                  <span className="catalogue-x__index">02</span>
                  <span className="catalogue-x__line"></span>
                  <span className="catalogue-x__label">Catalogue</span>
                </div>
                <h3 className="catalogue-x__heading">Engrais spéciaux</h3>
                <p className="catalogue-x__text">
                  Des formulations spécifiques adaptées aux besoins techniques des cultures, à
                  chaque stade de développement et à chaque objectif agronomique.
                </p>
              </div>
            </a>

            <a href="mineral-tech.html" className="catalogue-x__panel" aria-label="Voir la catégorie Engrais Mineral-Tech">
              <div className="catalogue-x__panel-bg-word">TECH</div>
              <div className="catalogue-x__image-wrap">
                <img src="image_cata3.jpg" alt="Engrais Mineral-Tech" className="catalogue-x__image" />
              </div>
              <div className="catalogue-x__overlay"></div>
              <div className="catalogue-x__content">
                <div className="catalogue-x__meta">
                  <span className="catalogue-x__index">03</span>
                  <span className="catalogue-x__line"></span>
                  <span className="catalogue-x__label">Catalogue</span>
                </div>
                <h3 className="catalogue-x__heading">Engrais Mineral-Tech</h3>
                <p className="catalogue-x__text">
                  Une technologie avancée au service d’une nutrition plus précise, plus stable et
                  mieux assimilée par la plante.
                </p>
              </div>
            </a>

            <a href="engrais-organiques.html" className="catalogue-x__panel" aria-label="Voir la catégorie Engrais organiques">
              <div className="catalogue-x__panel-bg-word">ORGANIQUE</div>
              <div className="catalogue-x__image-wrap">
                <img src="image_cata4.jpg" alt="Engrais organiques" className="catalogue-x__image" />
              </div>
              <div className="catalogue-x__overlay"></div>
              <div className="catalogue-x__content">
                <div className="catalogue-x__meta">
                  <span className="catalogue-x__index">04</span>
                  <span className="catalogue-x__line"></span>
                  <span className="catalogue-x__label">Catalogue</span>
                </div>
                <h3 className="catalogue-x__heading">Engrais organiques</h3>
                <p className="catalogue-x__text">
                  Des solutions orientées vers une fertilisation durable et respectueuse de
                  l’équilibre du sol et de la vie microbienne.
                </p>
              </div>
            </a>

            <a href="npk.html" className="catalogue-x__panel" aria-label="Voir la catégorie Engrais NPK hydrosolubles et en pâte">
              <div className="catalogue-x__panel-bg-word">NPK</div>
              <div className="catalogue-x__image-wrap">
                <img src="image_cata5.jpg" alt="Engrais NPK hydrosolubles et en pâte" className="catalogue-x__image" />
              </div>
              <div className="catalogue-x__overlay"></div>
              <div className="catalogue-x__content">
                <div className="catalogue-x__meta">
                  <span className="catalogue-x__index">05</span>
                  <span className="catalogue-x__line"></span>
                  <span className="catalogue-x__label">Catalogue</span>
                </div>
                <h3 className="catalogue-x__heading">Engrais NPK hydrosolubles & en pâte</h3>
                <p className="catalogue-x__text">
                  Des produits performants pour une nutrition rapide, maîtrisée et adaptée aux
                  exigences des systèmes modernes de fertilisation.
                </p>
              </div>
            </a>

            <a href="engrais-mineraux.html" className="catalogue-x__panel" aria-label="Voir la catégorie Engrais minéraux">
              <div className="catalogue-x__panel-bg-word">MINÉRAL</div>
              <div className="catalogue-x__image-wrap">
                <img src="image_cata6.jpg" alt="Engrais minéraux" className="catalogue-x__image" />
              </div>
              <div className="catalogue-x__overlay"></div>
              <div className="catalogue-x__content">
                <div className="catalogue-x__meta">
                  <span className="catalogue-x__index">06</span>
                  <span className="catalogue-x__line"></span>
                  <span className="catalogue-x__label">Catalogue</span>
                </div>
                <h3 className="catalogue-x__heading">Engrais minéraux</h3>
                <p className="catalogue-x__text">
                  Une gamme essentielle pour soutenir efficacement la croissance, la nutrition et
                  le rendement des cultures.
                </p>
              </div>
            </a>
          </div>

          <div className="catalogue-x__progress" aria-hidden="true">
            <div className="catalogue-x__progress-bar"></div>
          </div>
        </div>
      </section>

      


<section className="agri-cinema" id="innovation">
  <div className="agri-cinema__bg" aria-hidden="true">
    <div className="agri-cinema__grid"></div>
    <div className="agri-cinema__grain"></div>
    <div className="agri-cinema__radial agri-cinema__radial--one"></div>
    <div className="agri-cinema__radial agri-cinema__radial--two"></div>
    <div className="agri-cinema__radial agri-cinema__radial--three"></div>
    <div className="agri-cinema__top-fade"></div>
  </div>

  <div className="agri-cinema__intro">
    <p className="agri-cinema__eyebrow">Exigence agronomique</p>

    <h2 className="agri-cinema__title">
      Observer le terrain,
      <span> accompagner la performance</span>
    </h2>

    <p className="agri-cinema__subtitle">
      Une approche fondée sur la lecture des besoins culturaux, la sélection de
      solutions cohérentes et un accompagnement technique pensé pour inscrire la
      régularité dans la durée.
    </p>
  </div>

  <div className="agri-cinema__story">
    <div className="agri-cinema__sticky">
      <div className="agri-cinema__stage">
        <div className="agri-cinema__visual-col">
          <div className="agri-cinema__axis agri-cinema__axis--v"></div>
          <div className="agri-cinema__axis agri-cinema__axis--h"></div>

          <div className="agri-cinema__scene-wrap">
            <div className="agri-cinema__scene-glow"></div>
            <div className="agri-cinema__scene-ring"></div>

            <div className="agri-cinema__scene-shell">
              <div className="agri-cinema__scene-card">
                <div className="agri-cinema__scene">
                  <CardCarousel />
                </div>
              </div>
            </div>
          </div>

          <div className="agri-cinema__micro agri-cinema__micro--top">
            <span>Lecture terrain</span>
          </div>

          <div className="agri-cinema__micro agri-cinema__micro--bottom">
            <span>Accompagnement technique</span>
          </div>
        </div>

        <div className="agri-cinema__content-col">
          <article className="agri-cinema__step agri-cinema__step--one">
            <span className="agri-cinema__step-index">01</span>
            <h3>Observer avec précision</h3>
            <p>
              Comprendre le terrain, le stade de développement de la culture et
              ses besoins réels pour construire une réponse agronomique juste.
            </p>
          </article>

          <article className="agri-cinema__step agri-cinema__step--two">
            <span className="agri-cinema__step-index">02</span>
            <h3>Apporter une réponse cohérente</h3>
            <p>
              Sélectionner des solutions fiables, adaptées aux objectifs de
              nutrition, de vigueur, d’équilibre et de régularité des cultures.
            </p>
          </article>

          <article className="agri-cinema__step agri-cinema__step--three">
            <span className="agri-cinema__step-index">03</span>
            <h3>Inscrire la performance dans la durée</h3>
            <p>
              Soutenir la décision technique avec un accompagnement de proximité,
              pour ajuster les pratiques et renforcer la performance durable.
            </p>
          </article>
        </div>
      </div>
    </div>
  </div>
</section>
<section className="immersive-sequence" id="immersive-sequence">
  <div className="immersive-sequence__intro">
    <p className="immersive-sequence__eyebrow">Parcours agronomique</p>
    <h2 className="immersive-sequence__title">
      Du terrain observé
      <span> à la performance durable</span>
    </h2>
    <p className="immersive-sequence__subtitle">
      Une lecture progressive du terrain, des besoins et des réponses techniques
      pour accompagner durablement la performance des cultures.
    </p>
  </div>

  <div className="immersive-sequence__story">
    <div className="immersive-sequence__pin">
      <div className="immersive-sequence__stage">
        <div className="immersive-sequence__visual">
          <div className="immersive-sequence__item immersive-sequence__item--1">
            <div className="immersive-sequence__image-wrap">
              <img src="image_cata1.jpg" alt="Observation terrain" />
            </div>
          </div>

          <div className="immersive-sequence__item immersive-sequence__item--2">
            <div className="immersive-sequence__image-wrap">
              <img src="image_cata2.jpg" alt="Analyse des besoins" />
            </div>
          </div>

          <div className="immersive-sequence__item immersive-sequence__item--3">
            <div className="immersive-sequence__image-wrap">
              <img src="image_cata3.jpg" alt="Choix de la solution" />
            </div>
          </div>

          <div className="immersive-sequence__item immersive-sequence__item--4">
            <div className="immersive-sequence__image-wrap">
              <img src="image_cata4.jpg" alt="Application raisonnée" />
            </div>
          </div>

          <div className="immersive-sequence__item immersive-sequence__item--5">
            <div className="immersive-sequence__image-wrap">
              <img src="image_cata5.jpg" alt="Accompagnement technique" />
            </div>
          </div>

          <div className="immersive-sequence__item immersive-sequence__item--6">
            <div className="immersive-sequence__image-wrap">
              <img src="image_cata6.jpg" alt="Performance durable" />
            </div>
          </div>

          <div className="immersive-sequence__overlay"></div>

          <div className="immersive-sequence__texts">
            <div className="immersive-sequence__text-card immersive-sequence__text-card--1">
              <div className="immersive-sequence__label">
                <span>01</span>
                <small>Observation terrain</small>
              </div>
              <h3>Lire le terrain avec précision</h3>
              <p>
                Une première lecture du contexte cultural permet de comprendre
                l’état de la culture, les conditions du sol et les priorités agronomiques.
              </p>
            </div>

            <div className="immersive-sequence__text-card immersive-sequence__text-card--2">
              <div className="immersive-sequence__label">
                <span>02</span>
                <small>Analyse des besoins</small>
              </div>
              <h3>Identifier les besoins réels</h3>
              <p>
                Chaque situation demande une réponse ajustée. L’analyse guide le choix
                de solutions cohérentes et techniquement pertinentes.
              </p>
            </div>

            <div className="immersive-sequence__text-card immersive-sequence__text-card--3">
              <div className="immersive-sequence__label">
                <span>03</span>
                <small>Solutions adaptées</small>
              </div>
              <h3>Choisir la bonne réponse technique</h3>
              <p>
                Les formulations doivent répondre avec précision aux objectifs de vigueur,
                de nutrition, d’équilibre et de régularité des cultures.
              </p>
            </div>

            <div className="immersive-sequence__text-card immersive-sequence__text-card--4">
              <div className="immersive-sequence__label">
                <span>04</span>
                <small>Application raisonnée</small>
              </div>
              <h3>Construire un programme cohérent</h3>
              <p>
                Le bon produit prend toute sa valeur dans une stratégie agronomique pensée
                selon le stade de développement et les contraintes du terrain.
              </p>
            </div>

            <div className="immersive-sequence__text-card immersive-sequence__text-card--5">
              <div className="immersive-sequence__label">
                <span>05</span>
                <small>Accompagnement technique</small>
              </div>
              <h3>Suivre et ajuster sur le terrain</h3>
              <p>
                L’accompagnement technique permet d’affiner les recommandations, de sécuriser
                les décisions et de rester proche des réalités de l’exploitation.
              </p>
            </div>

            <div className="immersive-sequence__text-card immersive-sequence__text-card--6">
              <div className="immersive-sequence__label">
                <span>06</span>
                <small>Performance durable</small>
              </div>
              <h3>Inscrire la performance dans la durée</h3>
              <p>
                L’objectif final est une performance agricole durable, responsable et régulière,
                portée par une lecture juste du terrain et des solutions fiables.
              </p>
            </div>
          </div>
        </div>

        <div className="immersive-sequence__progress">
          <div className="immersive-sequence__progress-fill"></div>
        </div>
      </div>
    </div>
  </div>
</section>
<section className="research-lab" id="research">
  <div className="research-lab__bg" aria-hidden="true">
    <div className="research-lab__grid"></div>
    <div className="research-lab__glow research-lab__glow--one"></div>
    <div className="research-lab__glow research-lab__glow--two"></div>
  </div>

  <div className="research-lab__intro">
    <p className="research-lab__eyebrow">Recherche scientifique</p>

    <h2 className="research-lab__title">
      La science appliquée
      <span> à la performance agricole</span>
    </h2>

    <p className="research-lab__subtitle">
      Notre démarche de recherche associe observation agronomique, conception technique,
      validation en conditions réelles et transfert terrain pour construire des solutions
      fiables, cohérentes et durablement performantes.
    </p>
  </div>

  <div className="research-lab__timeline-wrap">
    <div className="research-lab__timeline">
      <div className="research-lab__line">
        <div className="research-lab__line-fill"></div>
      </div>

      <article className="research-lab__step research-lab__step--left">
        <div className="research-lab__media">
          <img src="image_cata1.jpg" alt="Observation agronomique du terrain" />
        </div>

        <div className="research-lab__content">
          <div className="research-lab__badge">01 - Observation</div>
          <h3>Observer avec précision</h3>
          <p>
            L’analyse du contexte cultural, du comportement végétatif et des contraintes
            agronomiques constitue le point de départ d’une recherche utile, rigoureuse
            et réellement connectée au terrain.
          </p>
        </div>

        <div className="research-lab__dot"></div>
      </article>

      <article className="research-lab__step research-lab__step--right">
        <div className="research-lab__media">
          <img src="image_cata2.jpg" alt="Conception et formulation technique" />
        </div>

        <div className="research-lab__content">
          <div className="research-lab__badge">02 - Formulation</div>
          <h3>Concevoir une réponse cohérente</h3>
          <p>
            La recherche permet d’orienter les choix techniques, de structurer les approches
            de formulation et de construire des solutions adaptées aux objectifs de nutrition,
            de stimulation et d’équilibre.
          </p>
        </div>

        <div className="research-lab__dot"></div>
      </article>

      <article className="research-lab__step research-lab__step--left">
        <div className="research-lab__media">
          <img src="image_cata3.jpg" alt="Validation en conditions réelles" />
        </div>

        <div className="research-lab__content">
          <div className="research-lab__badge">03 - Validation</div>
          <h3>Valider en conditions réelles</h3>
          <p>
            Les protocoles d’essai et les observations terrain permettent d’évaluer la
            régularité, la pertinence technique et la cohérence des solutions dans des
            situations concrètes de production.
          </p>
        </div>

        <div className="research-lab__dot"></div>
      </article>

      <article className="research-lab__step research-lab__step--right">
        <div className="research-lab__media">
          <img src="image_cata5.jpg" alt="Application et accompagnement terrain" />
        </div>

        <div className="research-lab__content">
          <div className="research-lab__badge">04 - Application</div>
          <h3>Transformer la recherche en terrain</h3>
          <p>
            Les résultats scientifiques prennent leur pleine valeur lorsqu’ils deviennent
            des recommandations claires, des solutions concrètes et un accompagnement capable
            de soutenir durablement la performance agricole.
          </p>
        </div>

        <div className="research-lab__dot"></div>
      </article>
    </div>
  </div>
</section>
<section className="blog-reveal" id="blog">
  <div className="blog-reveal__intro">
    <p className="blog-reveal__eyebrow">Blog & insights</p>
    <h2 className="blog-reveal__title">
      Regards, analyses
      <span> et lectures du terrain</span>
    </h2>
    <p className="blog-reveal__subtitle">
      Une sélection de contenus pour approfondir les enjeux agronomiques, les
      pratiques culturales et les dynamiques d’innovation au service du terrain.
    </p>
  </div>

  <div className="blog-reveal__story">
    <div className="blog-reveal__pin">
      <div className="blog-reveal__stage">
        <div className="blog-reveal__item blog-reveal__item--1">
          <div className="blog-reveal__image-wrap">
            <img src="image_cata1.jpg" alt="Lecture du terrain agricole" />
          </div>
          <div className="blog-reveal__overlay"></div>
          <div className="blog-reveal__content">
            <span className="blog-reveal__meta">Blog 01 - Lecture terrain</span>
            <h3>Comprendre le terrain avant toute décision technique</h3>
            <p>
              Pourquoi l’observation agronomique reste le point de départ d’une
              stratégie culturale cohérente et durable.
            </p>
          </div>
        </div>

        <div className="blog-reveal__item blog-reveal__item--2">
          <div className="blog-reveal__image-wrap">
            <img src="image_cata2.jpg" alt="Nutrition et équilibre des cultures" />
          </div>
          <div className="blog-reveal__overlay"></div>
          <div className="blog-reveal__content">
            <span className="blog-reveal__meta">Blog 02 - Nutrition</span>
            <h3>Nutrition, équilibre et régularité des cultures</h3>
            <p>
              Une approche plus précise de la nutrition végétale pour accompagner
              la vigueur et le potentiel de rendement.
            </p>
          </div>
        </div>

        <div className="blog-reveal__item blog-reveal__item--3">
          <div className="blog-reveal__image-wrap">
            <img src="image_cata3.jpg" alt="Biostimulation et performance" />
          </div>
          <div className="blog-reveal__overlay"></div>
          <div className="blog-reveal__content">
            <span className="blog-reveal__meta">Blog 03 - Biostimulation</span>
            <h3>Stimuler sans déséquilibrer la plante</h3>
            <p>
              Comment la biostimulation s’intègre dans une logique de soutien,
              d’équilibre physiologique et de performance durable.
            </p>
          </div>
        </div>

        <div className="blog-reveal__item blog-reveal__item--4">
          <div className="blog-reveal__image-wrap">
            <img src="image_cata4.jpg" alt="Innovation agronomique" />
          </div>
          <div className="blog-reveal__overlay"></div>
          <div className="blog-reveal__content">
            <span className="blog-reveal__meta">Blog 04 - Innovation</span>
            <h3>Quand l’innovation agronomique rencontre la réalité du champ</h3>
            <p>
              Entre formulation, observation et validation, comment la technique
              devient une réponse concrète pour les cultures.
            </p>
          </div>
        </div>

        <div className="blog-reveal__item blog-reveal__item--5">
          <div className="blog-reveal__image-wrap">
            <img src="image_cata5.jpg" alt="Accompagnement technique terrain" />
          </div>
          <div className="blog-reveal__overlay"></div>
          <div className="blog-reveal__content">
            <span className="blog-reveal__meta">Blog 05 - Accompagnement</span>
            <h3>L’accompagnement technique comme levier de décision</h3>
            <p>
              Le conseil terrain permet d’ajuster les pratiques, de sécuriser les
              choix et de renforcer la cohérence des programmes appliqués.
            </p>
          </div>
        </div>

        <div className="blog-reveal__item blog-reveal__item--6">
          <div className="blog-reveal__image-wrap">
            <img src="image_cata6.jpg" alt="Performance agricole durable" />
          </div>
          <div className="blog-reveal__overlay"></div>
          <div className="blog-reveal__content">
            <span className="blog-reveal__meta">Blog 06 - Performance durable</span>
            <h3>Inscrire la performance dans le temps long</h3>
            <p>
              Construire une agriculture performante, lisible et durable à partir
              d’une approche rigoureuse des besoins et des réponses techniques.
            </p>
          </div>
        </div>
      </div>

      <div className="blog-reveal__progress">
        <div className="blog-reveal__progress-fill"></div>
      </div>
    </div>
  </div>
</section>
<section className="reviews-showcase" id="reviews">
  <div className="reviews-showcase__bg" aria-hidden="true">
    <div className="reviews-showcase__grid"></div>
    <div className="reviews-showcase__glow reviews-showcase__glow--one"></div>
    <div className="reviews-showcase__glow reviews-showcase__glow--two"></div>
  </div>

  <div className="reviews-showcase__intro">
    <p className="reviews-showcase__eyebrow">Avis & retours terrain</p>
    <h2 className="reviews-showcase__title">
      Une confiance construite
      <span> sur le terrain</span>
    </h2>
    <p className="reviews-showcase__subtitle">
      Des retours d’expérience qui soulignent la cohérence technique, la qualité
      d’accompagnement et la régularité des solutions observées sur les cultures.
    </p>
  </div>

  <div className="reviews-showcase__story">
    <div className="reviews-showcase__pin">
      <div className="reviews-showcase__stage">
        <div className="reviews-showcase__frame">
          <div className="reviews-showcase__quote-icon">“</div>

          <div className="reviews-showcase__counter">
            <span className="reviews-showcase__counter-current">01</span>
            <span className="reviews-showcase__counter-separator">/</span>
            <span className="reviews-showcase__counter-total">06</span>
          </div>

          <div className="reviews-showcase__main-content reviews-showcase__main-content--1">
            <div className="reviews-showcase__rating">★★★★★</div>
            <p className="reviews-showcase__text">
              Une approche sérieuse, très proche du terrain. Les recommandations
              sont cohérentes, claires et réellement adaptées aux besoins de la culture.
            </p>
            <div className="reviews-showcase__author">
              <strong>Producteur maraîcher</strong>
              <span>Accompagnement technique</span>
            </div>
          </div>

          <div className="reviews-showcase__main-content reviews-showcase__main-content--2">
            <div className="reviews-showcase__rating">★★★★★</div>
            <p className="reviews-showcase__text">
              Nous avons apprécié la régularité du suivi et la pertinence des
              solutions proposées selon les stades et les contraintes observées sur parcelle.
            </p>
            <div className="reviews-showcase__author">
              <strong>Exploitant agricole</strong>
              <span>Programme nutrition & stimulation</span>
            </div>
          </div>

          <div className="reviews-showcase__main-content reviews-showcase__main-content--3">
            <div className="reviews-showcase__rating">★★★★★</div>
            <p className="reviews-showcase__text">
              L’équipe apporte une vraie lecture agronomique. On sent que la décision
              technique repose sur l’observation, pas uniquement sur le produit.
            </p>
            <div className="reviews-showcase__author">
              <strong>Responsable d’exploitation</strong>
              <span>Conseil agronomique</span>
            </div>
          </div>

          <div className="reviews-showcase__main-content reviews-showcase__main-content--4">
            <div className="reviews-showcase__rating">★★★★★</div>
            <p className="reviews-showcase__text">
              Les échanges sont précis, le suivi est sérieux et les recommandations
              restent lisibles. Cela nous aide à sécuriser les choix techniques.
            </p>
            <div className="reviews-showcase__author">
              <strong>Partenaire terrain</strong>
              <span>Suivi cultural</span>
            </div>
          </div>

          <div className="reviews-showcase__main-content reviews-showcase__main-content--5">
            <div className="reviews-showcase__rating">★★★★★</div>
            <p className="reviews-showcase__text">
              Nous avons vu une bonne cohérence entre la promesse technique, la
              logique d’application et les résultats observés dans le temps.
            </p>
            <div className="reviews-showcase__author">
              <strong>Producteur agrumes</strong>
              <span>Performance durable</span>
            </div>
          </div>

          <div className="reviews-showcase__main-content reviews-showcase__main-content--6">
            <div className="reviews-showcase__rating">★★★★★</div>
            <p className="reviews-showcase__text">
              La qualité du service vient autant de la solution que de
              l’accompagnement : présence terrain, écoute et capacité d’ajustement.
            </p>
            <div className="reviews-showcase__author">
              <strong>Client professionnel</strong>
              <span>Relation technique & service</span>
            </div>
          </div>

          <div className="reviews-showcase__footer-line"></div>
        </div>

        <div className="reviews-showcase__progress">
          <div className="reviews-showcase__progress-fill"></div>
        </div>
      </div>
    </div>
  </div>
</section>
<Footer />
    </main>
  );
}