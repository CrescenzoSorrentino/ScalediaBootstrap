(function() {
    function init() {
    // Synchronize navbar category filters with article section tabs
    const syncFilters = () => {
        // Get navbar dropdown items and dropdown toggle
        const navbarDropdown = document.getElementById('navbarDropdown');
        const marketingNavLink = document.querySelector('.dropdown-menu a[href="#marketing"]');
        const financeNavLink = document.querySelector('.dropdown-menu a[href="#finance"]');
        const programmingNavLink = document.querySelector('.dropdown-menu a[href="#programming"]');

        // Get article section tabs
        const allTab = document.getElementById('all-tab');
        const marketingTab = document.getElementById('marketing-tab');
        const financeTab = document.getElementById('finance-tab');
        const programmingTab = document.getElementById('programming-tab');

        // Function to update navbar dropdown text based on selected category
        const updateNavbarDropdown = (category) => {
            if (navbarDropdown) {
                // Get the i18n text for the category
                let categoryText = '';
                if (category === 'marketing') {
                    categoryText = marketingNavLink ? marketingNavLink.textContent.trim() : 'Marketing';
                } else if (category === 'finance') {
                    categoryText = financeNavLink ? financeNavLink.textContent.trim() : 'Finanza Personale';
                } else if (category === 'programming') {
                    categoryText = programmingNavLink ? programmingNavLink.textContent.trim() : 'Programmazione';
                }

                // Keep the icon but update the text
                const icon = navbarDropdown.querySelector('i') ? navbarDropdown.querySelector('i').outerHTML + ' ' : '';
                if (categoryText) {
                    navbarDropdown.innerHTML = icon + categoryText;
                }
            }
        };

        // Add click event listeners to navbar dropdown items
        if (marketingNavLink) {
            marketingNavLink.addEventListener('click', function(e) {
                e.preventDefault();
                // Scroll to articles section
                document.getElementById('articles').scrollIntoView({ behavior: 'smooth' });
                // Activate the marketing tab
                if (marketingTab) {
                    marketingTab.click();
                }
            });
        }

        if (financeNavLink) {
            financeNavLink.addEventListener('click', function(e) {
                e.preventDefault();
                // Scroll to articles section
                document.getElementById('articles').scrollIntoView({ behavior: 'smooth' });
                // Activate the finance tab
                if (financeTab) {
                    financeTab.click();
                }
            });
        }

        if (programmingNavLink) {
            programmingNavLink.addEventListener('click', function(e) {
                e.preventDefault();
                // Scroll to articles section
                document.getElementById('articles').scrollIntoView({ behavior: 'smooth' });
                // Activate the programming tab
                if (programmingTab) {
                    programmingTab.click();
                }
            });
        }

        // Add click event listeners to article section tabs
        if (marketingTab) {
            marketingTab.addEventListener('click', function() {
                updateNavbarDropdown('marketing');
            });
        }

        if (financeTab) {
            financeTab.addEventListener('click', function() {
                updateNavbarDropdown('finance');
            });
        }

        if (programmingTab) {
            programmingTab.addEventListener('click', function() {
                updateNavbarDropdown('programming');
            });
        }

        if (allTab) {
            allTab.addEventListener('click', function() {
                // Reset navbar dropdown to default text
                if (navbarDropdown) {
                    const icon = navbarDropdown.querySelector('i') ? navbarDropdown.querySelector('i').outerHTML + ' ' : '';
                    const span = navbarDropdown.querySelector('span');
                    if (span) {
                        navbarDropdown.innerHTML = icon + span.outerHTML;
                    }
                }
            });
        }
    };

    // Initialize filter synchronization
    syncFilters();

    const setButtonColors = (scope = document) => {
        const cards = scope.querySelectorAll('.card');
        cards.forEach(card => {
            const badge = card.querySelector('.badge');
            const readMoreBtn = card.querySelector('.card-footer .btn');

            if (badge && readMoreBtn) {
                const badgeClasses = badge.className.split(' ');
                const bgColorClass = badgeClasses.find(cls => cls.startsWith('bg-'));
                if (bgColorClass) {
                    const colorName = bgColorClass.replace('bg-', '');
                    readMoreBtn.classList.forEach(cls => {
                        if (cls.startsWith('btn-outline-')) {
                            readMoreBtn.classList.remove(cls);
                        }
                    });
                    readMoreBtn.classList.add(`btn-outline-${colorName}`);
                }
            }
        });
    };

    // Apply colors to initial cards
    setButtonColors();

    // Preload the placeholder image data URI for external images
    const externalPlaceholderImage = 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22300%22%20height%3D%22200%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20300%20200%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1%20text%20%7B%20fill%3A%23AAAAAA%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A15pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1%22%3E%3Crect%20width%3D%22300%22%20height%3D%22200%22%20fill%3D%22%23EEEEEE%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22110.5%22%20y%3D%22107.1%22%3EImage%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E';

    // Create a different placeholder for local images
    const localPlaceholderImage = 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22300%22%20height%3D%22200%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20300%20200%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_2%20text%20%7B%20fill%3A%23555555%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A15pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_2%22%3E%3Crect%20width%3D%22300%22%20height%3D%22200%22%20fill%3D%22%23777777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2290.5%22%20y%3D%22107.1%22%3ECard Image%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E';

    // Realistic images for different card types
    const creditCardImage = 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80';

    const duolingoImage = 'https://images.unsplash.com/photo-1621274147744-cfb5032bb7a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80';

    const marketingGlossaryImage = 'https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80';

    const abTestImage = 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80';

    const aidaModelImage = 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80';

    const replacePlaceholderImages = (scope = document) => {
        scope.querySelectorAll('img').forEach(img => {
            const src = img.getAttribute('src');
            const alt = img.getAttribute('alt') || '';
            if (src && (src.includes('picsum.photos') || src.includes('via.placeholder.com'))) {
                img.setAttribute('src', externalPlaceholderImage);
            }
            if (src && src.includes('placeholder.jpg')) {
                if (alt.includes('Credit Card')) {
                    img.setAttribute('src', creditCardImage);
                } else if (alt.includes('Duolingo')) {
                    img.setAttribute('src', duolingoImage);
                } else if (alt.includes('Marketing Glossary')) {
                    img.setAttribute('src', marketingGlossaryImage);
                } else if (alt.includes('AB Test')) {
                    img.setAttribute('src', abTestImage);
                } else if (alt.includes('AIDA Model')) {
                    img.setAttribute('src', aidaModelImage);
                } else {
                    const parentCard = img.closest('.card');
                    if (parentCard) {
                        const cardTitle = parentCard.querySelector('.card-title');
                        if (cardTitle) {
                            const titleText = cardTitle.textContent.toLowerCase();
                            if (titleText.includes('credit') || titleText.includes('carte di credito')) {
                                img.setAttribute('src', creditCardImage);
                            } else if (titleText.includes('duolingo')) {
                                img.setAttribute('src', duolingoImage);
                            } else if (titleText.includes('glossary') || titleText.includes('glossario')) {
                                img.setAttribute('src', marketingGlossaryImage);
                            } else if (titleText.includes('ab test') || titleText.includes('a/b')) {
                                img.setAttribute('src', abTestImage);
                            } else if (titleText.includes('aida')) {
                                img.setAttribute('src', aidaModelImage);
                            } else {
                                const currentPath = window.location.pathname;
                                if (currentPath.includes('aida-model')) {
                                    img.setAttribute('src', aidaModelImage);
                                } else if (currentPath.includes('ab-test')) {
                                    img.setAttribute('src', abTestImage);
                                } else if (currentPath.includes('marketing-glossary')) {
                                    img.setAttribute('src', marketingGlossaryImage);
                                } else if (currentPath.includes('credit-cards')) {
                                    img.setAttribute('src', creditCardImage);
                                } else if (currentPath.includes('duolingo-case')) {
                                    img.setAttribute('src', duolingoImage);
                                } else {
                                    img.setAttribute('src', localPlaceholderImage);
                                }
                            }
                        } else {
                            const currentPath = window.location.pathname;
                            if (currentPath.includes('aida-model')) {
                                img.setAttribute('src', aidaModelImage);
                            } else if (currentPath.includes('ab-test')) {
                                img.setAttribute('src', abTestImage);
                            } else if (currentPath.includes('marketing-glossary')) {
                                img.setAttribute('src', marketingGlossaryImage);
                            } else if (currentPath.includes('credit-cards')) {
                                img.setAttribute('src', creditCardImage);
                            } else if (currentPath.includes('duolingo-case')) {
                                img.setAttribute('src', duolingoImage);
                            } else {
                                img.setAttribute('src', localPlaceholderImage);
                            }
                        }
                    } else {
                        const currentPath = window.location.pathname;
                        if (currentPath.includes('aida-model')) {
                            img.setAttribute('src', aidaModelImage);
                        } else if (currentPath.includes('ab-test')) {
                            img.setAttribute('src', abTestImage);
                        } else if (currentPath.includes('marketing-glossary')) {
                            img.setAttribute('src', marketingGlossaryImage);
                        } else if (currentPath.includes('credit-cards')) {
                            img.setAttribute('src', creditCardImage);
                        } else if (currentPath.includes('duolingo-case')) {
                            img.setAttribute('src', duolingoImage);
                        } else {
                            img.setAttribute('src', localPlaceholderImage);
                        }
                    }
                }
            }
            img.onerror = function() {
                const originalSrc = this.getAttribute('src');
                const imgAlt = this.getAttribute('alt') || '';
                if (originalSrc && (originalSrc.includes('picsum.photos') || originalSrc.includes('via.placeholder.com'))) {
                    this.setAttribute('src', externalPlaceholderImage);
                    console.info('External image replaced: ' + originalSrc);
                } else {
                    if (imgAlt.includes('Credit Card')) {
                        this.setAttribute('src', creditCardImage);
                    } else if (imgAlt.includes('Duolingo')) {
                        this.setAttribute('src', duolingoImage);
                    } else if (imgAlt.includes('Marketing Glossary')) {
                        this.setAttribute('src', marketingGlossaryImage);
                    } else if (imgAlt.includes('AB Test')) {
                        this.setAttribute('src', abTestImage);
                    } else if (imgAlt.includes('AIDA Model')) {
                        this.setAttribute('src', aidaModelImage);
                    } else {
                        const currentPath = window.location.pathname;
                        if (currentPath.includes('aida-model')) {
                            this.setAttribute('src', aidaModelImage);
                        } else if (currentPath.includes('ab-test')) {
                            this.setAttribute('src', abTestImage);
                        } else if (currentPath.includes('marketing-glossary')) {
                            this.setAttribute('src', marketingGlossaryImage);
                        } else if (currentPath.includes('credit-cards')) {
                            this.setAttribute('src', creditCardImage);
                        } else if (currentPath.includes('duolingo-case')) {
                            this.setAttribute('src', duolingoImage);
                        } else {
                            const parentCard = this.closest('.card');
                            if (parentCard) {
                                const cardTitle = parentCard.querySelector('.card-title');
                                if (cardTitle) {
                                    const titleText = cardTitle.textContent.toLowerCase();
                                    if (titleText.includes('credit') || titleText.includes('carte di credito')) {
                                        this.setAttribute('src', creditCardImage);
                                    } else if (titleText.includes('duolingo')) {
                                        this.setAttribute('src', duolingoImage);
                                    } else if (titleText.includes('glossary') || titleText.includes('glossario')) {
                                        this.setAttribute('src', marketingGlossaryImage);
                                    } else if (titleText.includes('ab test') || titleText.includes('a/b')) {
                                        this.setAttribute('src', abTestImage);
                                    } else if (titleText.includes('aida')) {
                                        this.setAttribute('src', aidaModelImage);
                                    } else {
                                        this.setAttribute('src', localPlaceholderImage);
                                    }
                                } else {
                                    this.setAttribute('src', localPlaceholderImage);
                                }
                            } else {
                                this.setAttribute('src', localPlaceholderImage);
                            }
                        }
                    }
                    console.info('Local image replaced: ' + originalSrc);
                }
            };
        });
    };

    replacePlaceholderImages();

    // Animate cards to make them visible
    const animateCards = (scope = document) => {
        const cards = scope.querySelectorAll('.card');
        cards.forEach((card, index) => {
            // Add a slight delay for each card to create a staggered animation effect
            setTimeout(() => {
                card.classList.add('animate');
            }, index * 100); // 100ms delay between each card
        });
    };

    // Run the animation
    animateCards();

    // Simple reading time calculation
    const getReadingTime = (text) => {
        const wordsPerMinute = 200;
        const words = text ? text.trim().split(/\s+/).length : 0;
        return Math.max(1, Math.ceil(words / wordsPerMinute));
    };

    const setReadingTime = (element, minutes) => {
        element.setAttribute('data-i18n-options', JSON.stringify({ time: minutes }));

        let translated = null;
        if (typeof i18next !== 'undefined' && i18next.isInitialized && i18next.exists('readingTime')) {
            translated = i18next.t('readingTime', { time: minutes });
        }

        if (translated && translated !== 'readingTime') {
            element.textContent = translated;
        } else {
            const lang = (document.documentElement.lang || 'it').toLowerCase();
            if (lang.startsWith('en')) {
                element.textContent = `Reading time: ${minutes} min`;
            } else {
                element.textContent = `Tempo di lettura: ${minutes} min`;
            }
        }
    };

    const updateArticleReadingTime = () => {
        const articleBody = document.querySelector('.article-body');
        const readingTimeSpan = document.querySelector('.article-meta span[data-i18n="readingTime"]');
        if (articleBody && readingTimeSpan) {
            const minutes = getReadingTime(articleBody.textContent);
            setReadingTime(readingTimeSpan, minutes);
        }
    };

    const updateCardReadingTimes = (scope = document) => {
        const cards = scope.querySelectorAll('.card');
        cards.forEach(card => {
            const timeSpan = card.querySelector('.reading-time span');
            if (!timeSpan) return;

            let minutes = parseInt(card.getAttribute('data-reading-time'), 10);
            if (isNaN(minutes)) {
                const snippet = card.querySelector('.card-text');
                minutes = snippet ? getReadingTime(snippet.textContent) : 1;
            }

            setReadingTime(timeSpan, minutes);
        });
    };

    const fetchCardReadingTimesFromArticles = (scope = document) => {
        const cards = scope.querySelectorAll('.card');
        cards.forEach(card => {
            const link = card.querySelector('a[href]');
            const timeSpan = card.querySelector('.reading-time span');
            if (!link || !timeSpan) return;

            const url = new URL(link.getAttribute('href'), window.location.origin).toString();
            fetch(url)
                .then(resp => resp.text())
                .then(html => {
                    const parser = new DOMParser();
                    const doc = parser.parseFromString(html, 'text/html');
                    const articleBody = doc.querySelector('.article-body');
                    if (articleBody) {
                        const minutes = getReadingTime(articleBody.textContent);
                        card.setAttribute('data-reading-time', minutes);
                        setReadingTime(timeSpan, minutes);
                    }
                })
                .catch(err => console.error('Error fetching article for reading time', url, err));
        });
    };

    const updateRecommendedBadges = (scope = document) => {
        const cards = scope.querySelectorAll('.card[data-recommended="true"]');
        cards.forEach(card => {
            if (!card.querySelector('.card-badge-recommended')) {
                const badge = document.createElement('div');
                badge.className = 'card-badge card-badge-recommended';
                badge.setAttribute('data-i18n', 'featuredArticles.recommended');
                badge.textContent = (typeof i18next !== 'undefined') ? i18next.t('featuredArticles.recommended') : 'Consigliato';
                card.prepend(badge);
            }
        });
    };

    const updateNewBadges = (scope = document) => {
        const now = new Date();
        const twoWeeksMs = 14 * 24 * 60 * 60 * 1000;
        const cards = scope.querySelectorAll('.card[data-pubdate]');
        cards.forEach(card => {
            const dateStr = card.getAttribute('data-pubdate');
            if (!dateStr) return;
            const [day, month, year] = dateStr.split('/');
            const pubDate = new Date(`${year}-${month}-${day}T00:00:00`);
            const diff = now - pubDate;
            let badge = card.querySelector('.card-badge-new');
            const hasRecommended = card.querySelector('.card-badge-recommended') || card.getAttribute('data-recommended') === 'true';

            if (diff <= twoWeeksMs && !hasRecommended) {
                if (!badge) {
                    badge = document.createElement('div');
                    badge.className = 'card-badge card-badge-new';
                    badge.setAttribute('data-i18n', 'featuredArticles.new');
                    badge.textContent = (typeof i18next !== 'undefined') ? i18next.t('featuredArticles.new') : 'Nuovo';
                    card.prepend(badge);
                }
            } else if (badge) {
                badge.remove();
            }
        });
    };

    const populateHeroCarousel = () => {
        const heroCarousel = document.getElementById('heroCarousel');
        const carouselInner = heroCarousel ? heroCarousel.querySelector('.carousel-inner') : null;
        const indicators = heroCarousel ? heroCarousel.querySelector('.carousel-indicators') : null;
        const sourceCards = document.querySelectorAll('#articles .card');
        if (!carouselInner || !sourceCards.length) return;

        carouselInner.innerHTML = '';
        if (indicators) indicators.innerHTML = '';

        const seen = new Set();
        let slideIndex = 0;
        sourceCards.forEach(card => {
            const link = card.querySelector('a[href]');
            const href = link ? link.getAttribute('href') : null;
            if (href && seen.has(href)) return;
            if (href) seen.add(href);

            const isRecommended = card.getAttribute('data-recommended') === 'true';
            const isNew = card.querySelector('.card-badge-new');

            if (isRecommended || isNew) {
                const img = card.querySelector('img.card-img-top');
                const titleEl = card.querySelector('.card-title');
                const descEl = card.querySelector('.card-text');
                const readTimeEl = card.querySelector('.reading-time');
                const dateEl = card.querySelector('.article-date');
                const authorEl = card.querySelector('[data-i18n="writtenBy"]');

                const item = document.createElement('div');
                item.className = 'carousel-item';
                if (carouselInner.childElementCount === 0) item.classList.add('active');

                if (img) {
                    const imgClone = img.cloneNode();
                    imgClone.className = 'd-block w-100 hero-slide-img';
                    item.appendChild(imgClone);
                }

                const caption = document.createElement('div');
                caption.className = 'carousel-caption d-md-block';

                if (isRecommended || isNew) {
                    const badge = document.createElement('span');
                    badge.className = `badge ${isRecommended ? 'bg-success' : 'bg-danger'} me-2`;
                    badge.setAttribute('data-i18n', isRecommended ? 'featuredArticles.recommended' : 'featuredArticles.new');
                    badge.textContent = (typeof i18next !== 'undefined') ?
                        i18next.t(isRecommended ? 'featuredArticles.recommended' : 'featuredArticles.new') :
                        (isRecommended ? 'Consigliato' : 'Nuovo');
                    caption.appendChild(badge);
                }

                if (titleEl) {
                    const h5 = document.createElement('h5');
                    h5.className = 'fw-bold';
                    h5.textContent = titleEl.textContent;
                    caption.appendChild(h5);
                }

                if (descEl) {
                    const p = document.createElement('p');
                    p.className = 'd-none d-sm-block';
                    p.textContent = descEl.textContent;
                    caption.appendChild(p);
                }

                if (readTimeEl) {
                    const rt = readTimeEl.cloneNode(true);
                    caption.appendChild(rt);
                }

                if (dateEl) {
                    const dateClone = document.createElement('p');
                    dateClone.className = 'text-muted small';
                    dateClone.innerHTML = `<i class="bi bi-calendar me-1"></i> <span class="article-date">${dateEl.textContent}</span>`;
                    caption.appendChild(dateClone);
                }

                if (authorEl) {
                    const authorClone = document.createElement('p');
                    authorClone.className = 'text-muted small';
                    authorClone.innerHTML = `<i class="bi bi-person me-1"></i> ${authorEl.outerHTML}`;
                    caption.appendChild(authorClone);
                }

                if (href) {
                    const btn = document.createElement('a');
                    btn.href = href;
                    btn.className = 'btn btn-primary';
                    btn.setAttribute('data-i18n', 'featuredArticles.readMore');
                    btn.textContent = (typeof i18next !== 'undefined') ? i18next.t('featuredArticles.readMore') : 'Leggi di più';
                    caption.appendChild(btn);
                }

                item.appendChild(caption);
                carouselInner.appendChild(item);

                if (indicators) {
                    const indicator = document.createElement('button');
                    indicator.type = 'button';
                    indicator.setAttribute('data-bs-target', '#heroCarousel');
                    indicator.setAttribute('data-bs-slide-to', String(slideIndex));
                    indicator.setAttribute('aria-label', `Slide ${slideIndex + 1}`);
                    if (slideIndex === 0) {
                        indicator.className = 'active';
                        indicator.setAttribute('aria-current', 'true');
                    }
                    indicators.appendChild(indicator);
                    slideIndex++;
                }
            }
        });

        replacePlaceholderImages(carouselInner);
    };

    // Initial population in case the 'localized' event is not triggered
    updateArticleReadingTime();
    updateCardReadingTimes();
    fetchCardReadingTimesFromArticles();
    updateRecommendedBadges();
    updateNewBadges();
    populateHeroCarousel();

    document.addEventListener('localized', () => {
        // Update dynamic data when translations are applied.
        // Avoid repopulating the hero carousel here to prevent
        // a MutationObserver loop that causes cards to continually reload.
        updateArticleReadingTime();
        updateCardReadingTimes();
        fetchCardReadingTimesFromArticles();
        updateRecommendedBadges();
        updateNewBadges();
    });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
