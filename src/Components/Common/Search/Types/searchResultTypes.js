export const RESULT_TYPES = {
    // Student related
    Student: {
        icon: '🧑‍🦱',
        field: 'name',
        display: (result) => `${result.value}`,
        category: 'people'
    },
    // Developer related
    Developer: {
        icon: '🫢',
        field: 'name',
        display: (result) => `${result.value}`,
        category: 'people'
    },
    Recruiter: {
        icon: '🧑‍💻',
        field: 'name',
        display: (result) => `${result.value}`,
        category: 'people'
    },

    // Career related
    Career: {
        icon: '💼',
        field: 'title',
        display: (result) => result.value,
        category: 'opportunities'
    },
    Job: {
        icon: '🔧',
        field: 'position',
        display: (result) => `${result.value} (Job Opportunity)`,
        category: 'opportunities'
    },

    // Academic related
    Course: {
        icon: '📚',
        field: 'name',
        display: (result) => result.value,
        category: 'academics'
    },

    // Default fallback
    default: {
        icon: '🔍',
        field: 'value',
        display: (result) => result.value,
        category: 'general'
    }
};

export const RESULT_CATEGORIES = {
    people: {
        name: 'people',
        icon: '👥'
    },
    opportunities: {
        name: 'opportunities',
        icon: '💼'
    },
    academics: {
        name: 'academics',
        icon: '🎓'
    },
    general: {
        name: 'general',
        icon: '🔍'
    }
};