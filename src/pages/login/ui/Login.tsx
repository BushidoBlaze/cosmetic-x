import {useState, type FormEvent} from 'react';
import {NavLink} from 'react-router-dom';
import {ArrowRight, Eye, EyeOff, Lock, Mail} from 'lucide-react';
import {AuthLayout} from '@/shared/ui/authLayout';

export function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [remember, setRemember] = useState(true);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        if (!email.trim() || !password) return;
        setSubmitted(true);
    };

    return (
        <AuthLayout
            eyebrow="Account"
            title="Welcome back"
            subtitle="Sign in to access your collections, orders and personal preferences."
            footer={
                <>
                    New to X-Cosmetics? <NavLink to="/register">Create an account</NavLink>
                </>
            }
        >
            {submitted ? (
                <p className="auth-form__success">
                    You are signed in. Redirecting to your account…
                </p>
            ) : (
                <form className="auth-form" onSubmit={handleSubmit} noValidate>
                    <div className="auth-form__field">
                        <Mail className="auth-form__field-icon" size={18} strokeWidth={1.5}/>
                        <input
                            type="email"
                            className="auth-form__input"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            autoComplete="email"
                            required
                            aria-label="Email"
                        />
                    </div>

                    <div className="auth-form__field">
                        <Lock className="auth-form__field-icon" size={18} strokeWidth={1.5}/>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            className="auth-form__input"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            autoComplete="current-password"
                            required
                            aria-label="Password"
                        />
                        <button
                            type="button"
                            className="auth-form__toggle"
                            onClick={() => setShowPassword((v) => !v)}
                            aria-label={showPassword ? 'Hide password' : 'Show password'}
                            aria-pressed={showPassword}
                        >
                            {showPassword
                                ? <EyeOff size={16} strokeWidth={1.5}/>
                                : <Eye size={16} strokeWidth={1.5}/>
                            }
                        </button>
                    </div>

                    <div className="auth-form__row">
                        <label className="auth-form__checkbox">
                            <input
                                type="checkbox"
                                checked={remember}
                                onChange={(e) => setRemember(e.target.checked)}
                            />
                            Remember me
                        </label>

                        <NavLink to="/forgot-password" className="auth-form__link">
                            Forgot password?
                        </NavLink>
                    </div>

                    <button type="submit" className="auth-form__submit">
                        <span>Sign in</span>
                        <ArrowRight size={16} strokeWidth={1.5}/>
                    </button>
                </form>
            )}
        </AuthLayout>
    );
}
