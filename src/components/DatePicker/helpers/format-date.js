const FORMATS = {
    small: { year: '2-digit', month: 'numeric', day: 'numeric' },
    medium: { year: 'numeric', month: '2-digit', day: '2-digit' },
    large: { weekday: 'long', year: 'numeric', month: '2-digit', day: '2-digit' },
};

export default function formatDate(date, formatStyle = 'medium') {
    if (date) {
        const options = FORMATS[formatStyle] || FORMATS.medium;
        return new Intl.DateTimeFormat('en-US', options).format(date);
    }
    return undefined;
}
