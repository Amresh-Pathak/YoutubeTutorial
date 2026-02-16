import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Check local storage for user
        const storedUser = localStorage.getItem('medicare_user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
        setLoading(false);
    }, []);

    const login = (email, password) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Mock login
                if (email && password) {
                    const mockUser = {
                        id: 1,
                        name: 'John Doe',
                        email,
                        avatar: 'https://ui-avatars.com/api/?name=John+Doe'
                    };
                    setUser(mockUser);
                    localStorage.setItem('medicare_user', JSON.stringify(mockUser));
                    resolve(mockUser);
                } else {
                    reject('Invalid credentials');
                }
            }, 1000);
        });
    };

    const register = (userData) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const newUser = {
                    id: Date.now(),
                    ...userData,
                    avatar: `https://ui-avatars.com/api/?name=${userData.name}`
                };
                setUser(newUser);
                localStorage.setItem('medicare_user', JSON.stringify(newUser));
                resolve(newUser);
            }, 1000);
        });
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('medicare_user');
    };

    return (
        <AuthContext.Provider value={{ user, login, register, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};
