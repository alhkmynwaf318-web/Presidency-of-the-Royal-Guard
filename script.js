new TypeIt("#typewriter", {
    strings: ["بوابة وزارة العدل", "قيادة الحرس الملكي", "أمن المنشآت العدلية"],
    speed: 100,
    breakLines: false,
    loop: true
}).go();

// تعديل ألوان الجزيئات لتصبح خضراء
particlesJS("particles-js", {
    "particles": {
        "number": { "value": 60 },
        "color": { "value": "#2e7d32" }, // جزيئات خضراء
        "line_linked": {
            "color": "#2e7d32",
            "opacity": 0.2
        }
    }
});
