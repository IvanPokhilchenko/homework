import React, { useState } from 'react'

function Password() {
  const [password, setPassword] = useState('');

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const assessPasswordStrength = () => {

    let lengthScore;
    if(password.length >= 8) {
      lengthScore = 2;
    } else {
      lengthScore = 1;
    }

    const specialCharsRegex = /[1234567890!@#$%^&*(),.?"'-_:{}|<>]/;
    let complexityScore;
    if(specialCharsRegex.test(password)) {
      complexityScore = 2;
    } else {
      complexityScore = 1;
    }


    const totalScore = lengthScore + complexityScore;

    if (totalScore <= 2) {
      return 'Слабый';
    } else if (totalScore <= 3) {
      return 'Средний';
    } else {
      return 'Сильный';
    }
  };

  return (
    <div>
      <label>
        Пароль:
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </label>
      <p>Уровень пароля: {assessPasswordStrength()}</p>
    </div>
  );
};

export default Password;