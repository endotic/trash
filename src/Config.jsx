const defaultCfg = {
    name: 'default',
    gridSize: 50
};

class Config {
    constructor(cfg = {}) {
        this.cfg = { ...defaultCfg, ...cfg };
    }
    static get() {
        // update?
        return defaultCfg;
    }
};

export default Config;