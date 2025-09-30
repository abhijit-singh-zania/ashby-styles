document.querySelectorAll('.ashby-job-posting-brief-details p:first-child').forEach(p => {
  const parts = p.textContent.split('•').map(s => s.trim());
  // Remove 1st and 3rd items (index 0 and 2)
  const filtered = parts.filter((_, i) => i !== 0 && i !== 2);
  p.textContent = filtered.join(' • ');
});