import test from 'ava';
import execa from 'execa';

test('show help screen', async t => {
	t.regex(await execa.stdout('./cli.js', ['--help']), /Search GitHub repositories/);
});

test('show version', async t => {
	t.is(await execa.stdout('./cli.js', ['--version']), require('./package').version);
});
