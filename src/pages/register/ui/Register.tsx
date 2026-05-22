import {useState, type FormEvent} from 'react';
import {NavLink} from 'react-router-dom';
import {ArrowRight, Eye, EyeOff, Lock, Mail, User} from 'lucide-react';
import {AuthLayout} from '@/shared/ui/authLayout';

export function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [acceptTerms, setAcceptTerms] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        if (!name.trim() || !email.trim() || !password || !acceptTerms) return;
        setSubmitted(true);
    };

    return (
        <AuthLayout
            eyebrow="Account"
            title="Create an account"
            subtitle="Save your favourite collections, track orders and enjoy personalised offers."
            footer={
                <>
                    Already have an account? <NavLink to="/log-in">Sign in</NavLink>
                </>
            }
        >
            {submitted ? (
                <p className="auth-form__success">
                    Welcome to X-Cosmetics. Check your inbox to confirm your email.
                </p>
            ) : (
                <form className="auth-form" onSubmit={handleSubmit} noValidate>
                    <div className="auth-form__field">
                        <User className="auth-form__field-icon" size={18} strokeWidth={1.5}/>
                        <input
                            type="text"
                            className="auth-form__input"
                            placeholder="Full name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            autoComplete="name"
                            required
                            aria-label="Full name"
                        />
                    </div>

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
                            placeholder="Password (min 8 characters)"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            autoComplete="new-password"
                            minLength={8}
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

                    <label className="auth-form__checkbox">
                        <input
                            type="checkbox"
                            checked={acceptTerms}
                            onChange={(e) => setAcceptTerms(e.target.checked)}
                            required
                        />
                        <span>
                            I accept the{' '}
                            <NavLink to="/terms" className="auth-form__link">Terms</NavLink>
                            {' '}and{' '}
                            <NavLink to="/privacy" className="auth-form__link">Privacy Policy</NavLink>.
                        </span>
                    </label>

                    <button type="submit" className="auth-form__submit" disabled={!acceptTerms}>
                        <span>Create account</span>
                        <ArrowRight size={16} strokeWidth={1.5}/>
                    </button>
                </form>
            )}
        </AuthLayout>
    );
}
