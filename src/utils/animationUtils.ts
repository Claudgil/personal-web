export const setupScrollAnimation = () => {
  const elements = document.querySelectorAll('.animate-on-scroll');
  
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    },
    {
      threshold: 0.15
    }
  );
  
  elements.forEach(element => {
    observer.observe(element);
  });
  
  return () => {
    elements.forEach(element => {
      observer.unobserve(element);
    });
  };
};

export const formatDate = (dateString: string | null, format: 'long' | 'short' = 'short'): string => {
  if (!dateString) return 'Present';
  
  const date = new Date(dateString);
  
  if (format === 'long') {
    return date.toLocaleDateString('en-US', { 
      month: 'long',
      year: 'numeric'
    });
  }
  
  return date.toLocaleDateString('en-US', { 
    month: 'short',
    year: 'numeric'
  });
};